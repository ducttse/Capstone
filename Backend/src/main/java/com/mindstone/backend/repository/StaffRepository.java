package com.mindstone.backend.repository;

import com.mindstone.backend.entity.Staff;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface StaffRepository extends JpaRepository<Staff, Integer> {
    boolean existsByEmail(String email);

    @Query(value = "SELECT * FROM staff WHERE status = :status AND id = :staffId",
            nativeQuery = true)
    Optional<Staff> getStaffProfileById(Integer staffId, String status);

    @Query(value = "SELECT * FROM staff WHERE status = :status",
            nativeQuery = true)
    Page<Staff> getAllActiveStaff(Pageable pageable, String status);

    @Query(value = "SELECT *\n" +
            "FROM staff\n" +
            "WHERE email LIKE :searchText\n" +
            "\tOR díplayName LIKE :searchText", nativeQuery = true)
    Page<Staff> searchStaff(Pageable pageable, String searchText);
}
