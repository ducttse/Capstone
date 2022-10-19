package com.mindstone.backend.service;

import com.mindstone.backend.entity.Wallet;

import java.math.BigDecimal;
import java.util.Optional;

public interface WalletService {
    Integer saveWallet(Wallet wallet);

    Optional<Wallet> getWalletById(Integer walletId);

    void changeMoney(Wallet wallet, String message);
}
