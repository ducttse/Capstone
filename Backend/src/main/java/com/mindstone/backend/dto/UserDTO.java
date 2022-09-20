package com.mindstone.backend.dto;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public class UserDTO implements Serializable {
    private String id;
    private String walletId;
    private String fullName;
    private String email;
    private String password;
    private Date createTime;
    private Date dateOfBirth;
    private String bio;
    private Integer questionAnswered;
    private String avatarUrl;
    private Integer reputation;
    private WalletDTO walletDTO;
}
