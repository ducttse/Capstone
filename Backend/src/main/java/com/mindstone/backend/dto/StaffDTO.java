package com.mindstone.backend.dto;

import lombok.Data;

@Data
public class StaffDTO {
    private String id;
    private String roleId;
    private String email;
    private String password;
    private String displayName;
    private String avatarUrl;
    private String status;
}
