package com.mindstone.backend.repository;

import com.mindstone.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    @Query(value = "SELECT * FROM user WHERE status = :status AND id = :id",
            nativeQuery = true)
    Optional<User> getUserProfileById(Integer id, String status);

    boolean existsByEmail(String email);
}
