package com.mindstone.backend.request;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class UserUpdateRequest {
    private String fullName;
    private String email;
    private Date dateOfBirth;
    private String bio;
    private String avatarUrl;
}
