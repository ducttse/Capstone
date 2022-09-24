package com.mindstone.backend.api;

import com.mindstone.backend.constant.StringConstant;
import com.mindstone.backend.dto.UserDTO;
import com.mindstone.backend.entity.User;
import com.mindstone.backend.entity.Wallet;
import com.mindstone.backend.exception.CustomException;
import com.mindstone.backend.request.UserAddRequest;
import com.mindstone.backend.request.UserUpdateRequest;
import com.mindstone.backend.response.ResponseJson;
import com.mindstone.backend.service.UserService;
import com.mindstone.backend.service.WalletService;
import com.mindstone.backend.util.EncryptSHA256;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.math.BigDecimal;
import java.security.NoSuchAlgorithmException;
import java.util.Optional;

@RestController
@RequestMapping("user")
@AllArgsConstructor
public class UserController {

    private final Integer ZERO = 0;

    private ModelMapper modelMapper;

    final UserService userService;

    final WalletService walletService;

    @GetMapping("/view-profile")
    public ResponseEntity<ResponseJson<UserDTO>> getUserProfileById(Integer userId) {
        // Get data
        Optional<User> result = userService.getUserProfileById(userId);

        UserDTO userDTO = null;
        if (result.isPresent()) {
            userDTO = modelMapper.map(result.get(), UserDTO.class);
        }

        // Response
        ResponseJson<UserDTO> response = new ResponseJson<>(userDTO);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @PutMapping("/update-profile")
    public ResponseEntity<ResponseJson<UserDTO>> updateUserProfileById(Integer userId,
                                                                       @RequestBody @Valid UserUpdateRequest request) {
        ResponseJson<UserDTO> response = new ResponseJson<>();

        Optional<User> result = userService.getUserProfileById(userId);

        if (!result.isPresent()) {
            response.setStatusCode(HttpStatus.BAD_REQUEST.value());
            response.setMessage(StringConstant.MESSAGE.USER.NOT_FOUND);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        User user = result.get();

        user.setFullName(request.getFullName());
        user.setEmail(request.getEmail());
        user.setDateOfBirth(request.getDateOfBirth());
        user.setBio(request.getBio());
        user.setAvatarUrl(request.getAvatarUrl());

        userService.saveUser(user);

        UserDTO userDTO = modelMapper.map(user, UserDTO.class);
        response = new ResponseJson<>(userDTO);

        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @PutMapping("/change-password")
    public ResponseEntity<ResponseJson<UserDTO>> changePassword(Integer userId, String oldPassword, String newPassword, String confirmPassword) throws NoSuchAlgorithmException {

        ResponseJson<UserDTO> response = new ResponseJson<>();

        if (!newPassword.equals(confirmPassword)) {
            response.setStatusCode(HttpStatus.BAD_REQUEST.value());
            response.setMessage(StringConstant.MESSAGE.USER.CONFIRMPASSWORD_NOT_MATCH_NEWPASSWORD);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        Optional<User> result = userService.getUserProfileById(userId);

        if (!result.isPresent()) {
            response.setStatusCode(HttpStatus.BAD_REQUEST.value());
            response.setMessage(StringConstant.MESSAGE.USER.NOT_FOUND);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        User user = result.get();

        if (!user.getPassword().equals(EncryptSHA256.toHexString(EncryptSHA256.getSHA(oldPassword)))) {
            response.setStatusCode(HttpStatus.BAD_REQUEST.value());
            response.setMessage(StringConstant.MESSAGE.USER.WRONG_OLD_PASSWORD);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        user.setPassword(EncryptSHA256.toHexString(EncryptSHA256.getSHA(newPassword)));

        userService.saveUser(user);

        UserDTO userDTO = modelMapper.map(user, UserDTO.class);
        response = new ResponseJson<>(userDTO);

        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @PostMapping("/add-user")
    @Transactional(rollbackFor = {Exception.class, Throwable.class})
    public ResponseEntity<ResponseJson<UserDTO>> addUser(@RequestBody @Valid UserAddRequest request) {

        ResponseJson<UserDTO> response = new ResponseJson<>();

        //Check exist email
        if (userService.checkExistEmail(request.getEmail())) {
            response.setStatusCode(HttpStatus.BAD_REQUEST.value());
            response.setMessage(StringConstant.MESSAGE.USER.DUPLICATED_EMAIL);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        //TRANSACTION
        try {
            //create wallet
            Wallet wallet = new Wallet();
            wallet.setBalance(BigDecimal.valueOf(ZERO, ZERO));
            wallet.setId(walletService.saveWallet(wallet));

            //create user
            User user = modelMapper.map(request, User.class);
            user.setWalletId(wallet.getId());
            user.setPassword(EncryptSHA256.toHexString(EncryptSHA256.getSHA(user.getPassword())));
            user.setStatus(StringConstant.STATUS.ACTIVE);
            user.setQuestionAnswered(ZERO);
            user.setReputation(ZERO);

            userService.saveUser(user);
        } catch (Exception ex) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            response.setStatusCode(HttpStatus.BAD_REQUEST.value());
            response.setMessage(StringConstant.MESSAGE.USER.CREATE_ACCOUNT_FAILED);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @PostMapping
    public String test() throws NoSuchAlgorithmException {
        return EncryptSHA256.toHexString(EncryptSHA256.getSHA("1234"));
    }
}
