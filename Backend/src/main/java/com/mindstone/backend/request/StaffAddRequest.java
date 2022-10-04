package com.mindstone.backend.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StaffAddRequest {
    private String email;
    private String password;
    private String displayName;
    private String avatarUrl;
}
