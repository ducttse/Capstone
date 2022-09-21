package com.mindstone.backend.api;

import com.mindstone.backend.dto.UserDTO;
import com.mindstone.backend.entity.User;
import com.mindstone.backend.request.UserUpdateRequest;
import com.mindstone.backend.response.ResponseJson;
import com.mindstone.backend.service.UserService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("user")
@AllArgsConstructor
public class UserController {

    private ModelMapper modelMapper;

    final UserService userService;

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
            response.setMessage("Không tìm thấy thông tin tài khoản!");
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
}
