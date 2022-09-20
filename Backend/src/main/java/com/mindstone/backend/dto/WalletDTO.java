package com.mindstone.backend.dto;


import lombok.Data;

import java.math.BigDecimal;

@Data
public class WalletDTO {
    private String id;
    private BigDecimal balance;
}
