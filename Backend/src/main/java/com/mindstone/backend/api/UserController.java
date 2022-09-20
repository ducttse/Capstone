package com.mindstone.backend.api;

import com.mindstone.backend.dto.UserDTO;
import com.mindstone.backend.entity.User;
import com.mindstone.backend.response.ResponseJson;
import com.mindstone.backend.service.UserService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("api/user")
@AllArgsConstructor
public class UserController {

    private ModelMapper modelMapper;

    final UserService userService;

    @GetMapping("/profile")
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
}
