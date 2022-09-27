package com.mindstone.backend.service.impl;

import com.mindstone.backend.model.Wallet;
import com.mindstone.backend.repositories.WalletRepository;
import com.mindstone.backend.service.WalletService;
import org.springframework.beans.factory.annotation.Autowired;

public class WalletServiceImpl implements WalletService {

  @Autowired
  WalletRepository walletRepository;

  @Override
  public Wallet GetWalletById(int id) {
    return walletRepository.findById(id).get();
  }
}
