package com.mindstone.backend.service;

import com.mindstone.backend.entity.User;
import com.mindstone.backend.request.PagedFilterRequest;
import org.springframework.data.domain.Page;

import java.util.Optional;

public interface UserService {
    Optional<User> getUserProfileById(Integer userId);

    void saveUser(User user);

    boolean checkExistEmail(String email);

    Optional<User> getUserProfileByEmail(String email);

    Page<User> getAllActiveUser(PagedFilterRequest request);

    Page<User> searchUser(PagedFilterRequest request, String searchText);
}
