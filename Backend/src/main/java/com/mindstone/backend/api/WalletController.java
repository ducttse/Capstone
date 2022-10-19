package com.mindstone.backend.api;

import com.mindstone.backend.constant.StringConstant;
import com.mindstone.backend.dto.WalletDTO;
import com.mindstone.backend.entity.Wallet;
import com.mindstone.backend.response.ResponseJson;
import com.mindstone.backend.service.WalletService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.Optional;

@RestController
@RequestMapping("api/wallet")
@AllArgsConstructor
public class WalletController {

    private ModelMapper modelMapper;

    final WalletService walletService;

    @PutMapping("/deposit/{id}")
    public ResponseEntity<ResponseJson<WalletDTO>> depositMoney(@PathVariable Integer id, BigDecimal money) {
        ResponseJson<WalletDTO> response = new ResponseJson<>();

        Optional<Wallet> result = walletService.getWalletById(id);

        if (!result.isPresent()) {
            response.setStatusCode(HttpStatus.BAD_REQUEST.value());
            response.setMessage(StringConstant.MESSAGE.WALLET.NOT_FOUND);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        Wallet wallet = result.get();
        wallet.setBalance(wallet.getBalance().add(money));

        walletService.changeMoney(wallet, StringConstant.MESSAGE.WALLET.DEPOSIT_FAILED);

        Optional<Wallet> newResult = walletService.getWalletById(id);
        WalletDTO walletDTO = null;
        if (!newResult.isPresent()) {
            response.setStatusCode(HttpStatus.BAD_REQUEST.value());
            response.setMessage(StringConstant.MESSAGE.WALLET.NOT_FOUND);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        } else {
            walletDTO = modelMapper.map(wallet, WalletDTO.class);
        }

        response.setData(walletDTO);
        response.setMessage(StringConstant.MESSAGE.WALLET.DEPOSIT_SUCCESS);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @PutMapping("/withdraw/{id}")
    public ResponseEntity<ResponseJson<WalletDTO>> withdrawMoney(@PathVariable Integer id, BigDecimal money) {
        ResponseJson<WalletDTO> response = new ResponseJson<>();

        Optional<Wallet> result = walletService.getWalletById(id);

        if (!result.isPresent()) {
            response.setStatusCode(HttpStatus.BAD_REQUEST.value());
            response.setMessage(StringConstant.MESSAGE.WALLET.NOT_FOUND);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        Wallet wallet = result.get();
        wallet.setBalance(wallet.getBalance().subtract(money));

        walletService.changeMoney(wallet, StringConstant.MESSAGE.WALLET.WITHDRAW_FAILED);

        Optional<Wallet> newResult = walletService.getWalletById(id);
        WalletDTO walletDTO = null;
        if (!newResult.isPresent()) {
            response.setStatusCode(HttpStatus.BAD_REQUEST.value());
            response.setMessage(StringConstant.MESSAGE.WALLET.NOT_FOUND);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        } else {
            walletDTO = modelMapper.map(wallet, WalletDTO.class);
        }

        response.setData(walletDTO);
        response.setMessage(StringConstant.MESSAGE.WALLET.WITHDRAW_SUCCESS);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }
}
