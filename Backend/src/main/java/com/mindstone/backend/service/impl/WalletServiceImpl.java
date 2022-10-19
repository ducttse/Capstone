package com.mindstone.backend.service.impl;

import com.mindstone.backend.constant.StringConstant;
import com.mindstone.backend.entity.Wallet;
import com.mindstone.backend.exception.CustomException;
import com.mindstone.backend.repository.WalletRepository;
import com.mindstone.backend.service.WalletService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.util.Optional;

@Service
@Transactional
@AllArgsConstructor
public class WalletServiceImpl implements WalletService {

    final EntityManager entityManager;

    final WalletRepository walletRepository;

    @Override
    public Integer saveWallet(Wallet wallet) {
        try {
            entityManager.persist(wallet);
        } catch (Exception ex) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            throw new CustomException(400, StringConstant.MESSAGE.WALLET.CREATE_WALLET_FAILED);
        }
        return wallet.getId();
    }

    @Override
    public Optional<Wallet> getWalletById(Integer walletId) {
        return walletRepository.findById(walletId);
    }

    @Override
    @Transactional
    public void changeMoney(Wallet wallet, String message) {
        try {
            walletRepository.save(wallet);
        } catch (Exception ex) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            throw new CustomException(400, message);
        }
    }
}
