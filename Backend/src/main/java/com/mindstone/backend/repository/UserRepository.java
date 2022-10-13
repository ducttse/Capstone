package com.mindstone.backend.repository;

import com.mindstone.backend.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    @Query(value = "SELECT * FROM user WHERE status = :status AND id = :id",
            nativeQuery = true)
    Optional<User> getUserProfileById(Integer id, String status);

    boolean existsByEmail(String email);

    @Query(value = "SELECT * FROM user WHERE status = :status AND email = :email",
            nativeQuery = true)
    Optional<User> getUserProfileByEmail(String email, String status);

    @Query(value = "SELECT * FROM user WHERE status = :status", nativeQuery = true)
    Page<User> getAllActiveUser(Pageable pageable, String status);

    @Query(value = "SELECT *\n" +
            "FROM user\n" +
            "WHERE email LIKE :searchText\n" +
            "\tOR fullName LIKE :searchText", nativeQuery = true)
    Page<User> searchUser(Pageable pageable, String searchText);
}
