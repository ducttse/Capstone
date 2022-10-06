package com.mindstone.backend.service;

import com.mindstone.backend.entity.Staff;
import com.mindstone.backend.request.PagedFilterRequest;
import org.springframework.data.domain.Page;

import java.util.Optional;

public interface StaffService {

    boolean checkExistEmail(String email);

    void saveStaff(Staff staff);

    Optional<Staff> getStaffProfileById(Integer staffId);

    Page<Staff> getAllActiveStaff(PagedFilterRequest request);
}
