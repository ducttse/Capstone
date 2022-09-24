package com.mindstone.backend.request;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class UserAddRequest {
    private String fullName;
    private String email;
    private String password;
    private Date dateOfBirth;
    private String bio;
    private String avatarUrl;
}
