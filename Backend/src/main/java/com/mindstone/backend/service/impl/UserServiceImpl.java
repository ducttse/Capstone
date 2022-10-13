package com.mindstone.backend.service.impl;

import com.mindstone.backend.constant.StringConstant;
import com.mindstone.backend.entity.User;
import com.mindstone.backend.exception.CustomException;
import com.mindstone.backend.repository.UserRepository;
import com.mindstone.backend.request.PagedFilterRequest;
import com.mindstone.backend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    final UserRepository userRepository;

    @Override
    public Optional<User> getUserProfileById(Integer userId) {
        return userRepository.getUserProfileById(userId, StringConstant.STATUS.ACTIVE);
    }

    @Override
    public void saveUser(User user) {
        try {
            userRepository.save(user);
        } catch (Exception ex) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            throw new CustomException(400, StringConstant.MESSAGE.USER.UPDATE_USER_FAILED);
        }
    }

    @Override
    public boolean checkExistEmail(String email) {
        return userRepository.existsByEmail(email);
    }

    @Override
    public Optional<User> getUserProfileByEmail(String email) {
        return userRepository.getUserProfileByEmail(email, StringConstant.STATUS.ACTIVE);
    }

    @Override
    public Page<User> getAllActiveUser(PagedFilterRequest request) {
        Pageable pageable = PageRequest.of(request.getPageNumber() - 1, request.getPageSize());
        Page<User> pagedUser = userRepository.getAllActiveUser(pageable, StringConstant.STATUS.ACTIVE);
        return pagedUser;
    }

    @Override
    public Page<User> searchUser(PagedFilterRequest request, String searchText) {
        Pageable pageable = PageRequest.of(request.getPageNumber() - 1, request.getPageSize());
        Page<User> pagedUser = userRepository.searchUser(pageable ,'%' + searchText + '%');
        return pagedUser;
    }


}
