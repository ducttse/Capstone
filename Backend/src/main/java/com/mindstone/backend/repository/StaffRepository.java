package com.mindstone.backend.repository;

import com.mindstone.backend.dto.StaffDTO;
import com.mindstone.backend.entity.Staff;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface StaffRepository extends JpaRepository<Staff, Integer> {
    boolean existsByEmail(String email);

    @Query(value = "SELECT * FROM staff WHERE status = :status AND id = :staffId",
            nativeQuery = true)
    Optional<Staff> getStaffProfileById(Integer staffId, String status);
}
