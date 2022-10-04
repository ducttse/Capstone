package com.mindstone.backend.service;

import com.mindstone.backend.dto.StaffDTO;
import com.mindstone.backend.entity.Staff;
import com.mindstone.backend.request.StaffUpdateRequest;

import java.util.Optional;

public interface StaffService {

    boolean checkExistEmail(String email);

    void saveStaff(Staff staff);

    Optional<Staff> getStaffProfileById(Integer staffId);
}
