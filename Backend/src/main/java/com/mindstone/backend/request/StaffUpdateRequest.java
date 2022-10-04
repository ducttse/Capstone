package com.mindstone.backend.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StaffUpdateRequest {
    private String email;
    private String displayName;
    private String avatarUrl;
}
