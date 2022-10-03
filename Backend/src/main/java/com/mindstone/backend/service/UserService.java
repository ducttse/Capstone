package com.mindstone.backend.service;

import com.mindstone.backend.entity.User;

import java.util.Optional;

public interface UserService {
    Optional<User> getUserProfileById(Integer userId);

    void saveUser(User user);

    boolean checkExistEmail(String email);

    Optional<User> getUserProfileByEmail(String email);
}
