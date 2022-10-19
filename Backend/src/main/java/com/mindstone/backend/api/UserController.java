package com.mindstone.backend.api;

import com.mindstone.backend.constant.StringConstant;
import com.mindstone.backend.dto.EmailDetails;
import com.mindstone.backend.dto.StaffDTO;
import com.mindstone.backend.dto.UserDTO;
import com.mindstone.backend.entity.Staff;
import com.mindstone.backend.entity.User;
import com.mindstone.backend.entity.Wallet;
import com.mindstone.backend.request.PagedFilterRequest;
import com.mindstone.backend.request.UserAddRequest;
import com.mindstone.backend.request.UserUpdateRequest;
import com.mindstone.backend.response.MetaData;
import com.mindstone.backend.response.ResponseJson;
import com.mindstone.backend.service.EmailService;
import com.mindstone.backend.service.UserService;
import com.mindstone.backend.service.WalletService;
import com.mindstone.backend.util.EncryptSHA256;
import lombok.AllArgsConstructor;
import org.apache.commons.lang3.RandomStringUtils;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.math.BigDecimal;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api/users")
public class UserController {

    private final Integer ZERO = 0;
    private final Integer SIX_DIGITS = 6;

    private ModelMapper modelMapper;

    private final UserService userService;

    private final WalletService walletService;


    private final EmailService emailService;

    public UserController(ModelMapper modelMapper, UserService userService, WalletService walletService, EmailService emailService) {
        this.modelMapper = modelMapper;
        this.userService = userService;
        this.walletService = walletService;
        this.emailService = emailService;
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        TypeMap<User, UserDTO> typeMap = modelMapper.createTypeMap(User.class, UserDTO.class);
        typeMap.addMappings(mapper -> mapper.map(src -> src.getWalletId(), UserDTO::setWalletId));
        typeMap.addMappings(mapper -> mapper.map(src -> src.getWallet(), UserDTO::setWalletDTO));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseJson<UserDTO>> getUserProfileById(@PathVariable Integer id) {
        // Get data
        Optional<User> result = userService.getUserProfileById(id);

        UserDTO userDTO = null;
        if (result.isPresent()) {
            userDTO = modelMapper.map(result.get(), UserDTO.class);
        }

        // Response
        ResponseJson<UserDTO> response = new ResponseJson<>(userDTO);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @PutMapping("/{id}/update-profile")
    public ResponseEntity<ResponseJson<UserDTO>> updateUserProfileById(@PathVariable Integer id,
                                                                       @RequestBody @Valid UserUpdateRequest request) {
        ResponseJson<UserDTO> response = new ResponseJson<>();

        Optional<User> result = userService.getUserProfileById(id);

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

    @PutMapping("/{id}/change-password")
    public ResponseEntity<ResponseJson<UserDTO>> changePassword(@PathVariable Integer id, String oldPassword, String newPassword, String confirmPassword) throws NoSuchAlgorithmException {

        ResponseJson<UserDTO> response = new ResponseJson<>();

        if (!newPassword.equals(confirmPassword)) {
            response.setStatusCode(HttpStatus.BAD_REQUEST.value());
            response.setMessage(StringConstant.MESSAGE.USER.CONFIRMPASSWORD_NOT_MATCH_NEWPASSWORD);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        Optional<User> result = userService.getUserProfileById(id);

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

    @PostMapping("/sendOTP")
    public ResponseEntity<ResponseJson<String>> sendOTP(String email) {

        ResponseJson<String> response = new ResponseJson<>();

        //Generate OTP
        String otp = RandomStringUtils.randomNumeric(SIX_DIGITS);

        //Save OTP to DB
        Optional<User> result = userService.getUserProfileByEmail(email);
        if (!result.isPresent()) {
            response.setStatusCode(HttpStatus.BAD_REQUEST.value());
            response.setMessage(StringConstant.MESSAGE.USER.NOT_FOUND);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        User user = result.get();
        user.setOtp(otp);

        userService.saveUser(user);

        //Send OTP to Email
        EmailDetails emailDetails = new EmailDetails();
        emailDetails.setRecipient(user.getEmail());
        emailDetails.setSubject("Mã OTP");
        emailDetails.setMsgBody("Mã OTP: " + otp);

        if (!emailService.sendEmail(emailDetails)) {
            response.setStatusCode(HttpStatus.BAD_REQUEST.value());
            response.setMessage(StringConstant.MESSAGE.USER.NOT_FOUND);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        response.setMessage(StringConstant.MESSAGE.USER.SEND_OTP_SUCCESS);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @PostMapping("/change-password-by-otp")
    public ResponseEntity<ResponseJson<String>> changePasswordByOTP(String email, String newPassword, String otp) throws NoSuchAlgorithmException {

        ResponseJson<String> response = new ResponseJson<>();

        Optional<User> result = userService.getUserProfileByEmail(email);
        if (!result.isPresent()) {
            response.setStatusCode(HttpStatus.BAD_REQUEST.value());
            response.setMessage(StringConstant.MESSAGE.USER.NOT_FOUND);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        User user = result.get();
        if (user.getOtp().equals(otp)) {
            user.setPassword(EncryptSHA256.toHexString(EncryptSHA256.getSHA(newPassword)));
            userService.saveUser(user);
        } else {
            response.setStatusCode(HttpStatus.BAD_REQUEST.value());
            response.setMessage(StringConstant.MESSAGE.USER.WRONG_OTP);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        response.setMessage(StringConstant.MESSAGE.USER.UPDATE_PASSWORD_SUCCESS);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @GetMapping("/get-all")
    public ResponseEntity<ResponseJson<List<UserDTO>>> getAll (@Valid PagedFilterRequest request) {
        Page<User> result = userService.getAllActiveUser(request);

        MetaData metaData = new MetaData(result.getNumber(), result.getSize(), result.getTotalPages(), result.getTotalElements());

        List<UserDTO> userDTOList = result
                .stream()
                .map(user -> modelMapper.map(user, UserDTO.class))
                .collect(Collectors.toList());

        ResponseJson<List<UserDTO>> response = new ResponseJson<>(userDTOList, metaData);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @DeleteMapping("/{id}")
    ResponseEntity<ResponseJson<UserDTO>> disableUser(@PathVariable Integer id) {
        ResponseJson<UserDTO> response = new ResponseJson<>();

        Optional<User> result = userService.getUserProfileById(id);

        if (!result.isPresent()) {
            response.setStatusCode(HttpStatus.BAD_REQUEST.value());
            response.setMessage(StringConstant.MESSAGE.USER.NOT_FOUND);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        User user = result.get();
        user.setStatus(StringConstant.STATUS.INACTIVE);

        userService.saveUser(user);

        UserDTO userDTO = modelMapper.map(user, UserDTO.class);
        response = new ResponseJson<>(userDTO);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @GetMapping()
    public ResponseEntity<ResponseJson<List<UserDTO>>> searchUser(@Valid PagedFilterRequest request, String SearchText) {
        Page<User> result = userService.searchUser(request, SearchText);

        MetaData metaData = new MetaData(result.getNumber(), result.getSize(), result.getTotalPages(), result.getTotalElements());

        List<UserDTO> userDTOList = result
                .stream()
                .map(user -> modelMapper.map(user, UserDTO.class))
                .collect(Collectors.toList());

        ResponseJson<List<UserDTO>> response = new ResponseJson<>(userDTOList, metaData);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }
}
