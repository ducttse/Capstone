package com.mindstone.backend.service.impl;

import com.mindstone.backend.constant.StringConstant;
import com.mindstone.backend.dto.StaffDTO;
import com.mindstone.backend.entity.Staff;
import com.mindstone.backend.exception.CustomException;
import com.mindstone.backend.repository.StaffRepository;
import com.mindstone.backend.service.StaffService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
@AllArgsConstructor
public class StaffServiceImpl implements StaffService {

    final StaffRepository staffRepository;

    @Override
    public boolean checkExistEmail(String email) {
        return staffRepository.existsByEmail(email);
    }

    @Override
    public void saveStaff(Staff staff) {
        try {
            staffRepository.save(staff);
        } catch (Exception ex) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            throw new CustomException(400, StringConstant.MESSAGE.STAFF.UPDATE_STAFF_FAILED);
        }
    }

    @Override
    public Optional<Staff> getStaffProfileById(Integer staffId) {
        return staffRepository.getStaffProfileById(staffId, StringConstant.STATUS.ACTIVE);
    }
}
