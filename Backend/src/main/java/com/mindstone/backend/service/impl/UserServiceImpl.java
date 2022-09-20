package com.mindstone.backend.service.impl;

import com.mindstone.backend.entity.User;
import com.mindstone.backend.repository.UserRepository;
import com.mindstone.backend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private final String ACTIVE = "ACTIVE";

    final UserRepository userRepository;

    @Override
    public Optional<User> getUserProfileById(Integer userId) {
        return userRepository.getUserProfileById(userId, ACTIVE);
    }
}
