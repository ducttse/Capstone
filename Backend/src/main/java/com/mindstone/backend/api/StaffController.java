package com.mindstone.backend.api;

import com.mindstone.backend.constant.StringConstant;
import com.mindstone.backend.dto.StaffDTO;
import com.mindstone.backend.dto.UserDTO;
import com.mindstone.backend.entity.Staff;
import com.mindstone.backend.entity.User;
import com.mindstone.backend.request.StaffAddRequest;
import com.mindstone.backend.request.StaffUpdateRequest;
import com.mindstone.backend.response.ResponseJson;
import com.mindstone.backend.service.StaffService;
import com.mindstone.backend.util.EncryptSHA256;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("staff")
@AllArgsConstructor
public class StaffController {

    private final Integer STAFF_ROLE_ID = 2;

    private ModelMapper modelMapper;

    final StaffService staffService;

    @PostMapping("/add")
    public ResponseEntity<ResponseJson<StaffDTO>> addStaff(@RequestBody @Valid StaffAddRequest request) throws NoSuchAlgorithmException {

        ResponseJson<StaffDTO> response = new ResponseJson<>();

        if (staffService.checkExistEmail(request.getEmail())) {
            response.setStatusCode(HttpStatus.BAD_REQUEST.value());
            response.setMessage(StringConstant.MESSAGE.USER.DUPLICATED_EMAIL);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        Staff staff = new Staff();
        staff.setRoleId(STAFF_ROLE_ID);
        staff.setEmail(request.getEmail());
        staff.setPassword(EncryptSHA256.toHexString(EncryptSHA256.getSHA(request.getPassword())));
        staff.setDisplayName(request.getDisplayName());
        staff.setAvatarUrl(request.getAvatarUrl());
        staff.setStatus(StringConstant.STATUS.ACTIVE);

        staffService.saveStaff(staff);

        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @PutMapping("/update")
    public ResponseEntity<ResponseJson<StaffDTO>> updateStaff(Integer staffId, @RequestBody @Valid StaffUpdateRequest request) {

        ResponseJson<StaffDTO> response = new ResponseJson<>();

        Optional<Staff> result = staffService.getStaffProfileById(staffId);

        if (!result.isPresent()) {
            response.setStatusCode(HttpStatus.BAD_REQUEST.value());
            response.setMessage(StringConstant.MESSAGE.USER.NOT_FOUND);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        Staff staff = result.get();
        staff.setEmail(request.getEmail());
        staff.setDisplayName(request.getDisplayName());
        staff.setAvatarUrl(request.getAvatarUrl());

        staffService.saveStaff(staff);

        StaffDTO staffDTO = modelMapper.map(staff, StaffDTO.class);
        response = new ResponseJson<>(staffDTO);

        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @GetMapping("/get-profile")
    public ResponseEntity<ResponseJson<StaffDTO>> getStaffProfileById(Integer staffId) {
        // Get data
        Optional<Staff> result = staffService.getStaffProfileById(staffId);

        StaffDTO staffDTO = null;
        if (result.isPresent()) {
            staffDTO = modelMapper.map(result.get(), StaffDTO.class);
        }

        // Response
        ResponseJson<StaffDTO> response = new ResponseJson<>(staffDTO);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

//    @GetMapping("/get-all")
//    public ResponseEntity<ResponseJson<List<StaffDTO>>> getAll(Integer staffId) {
//        // Get data
//        Optional<Staff> result = staffService.getStaffProfileById(staffId);
//
//        StaffDTO staffDTO = null;
//        if (result.isPresent()) {
//            staffDTO = modelMapper.map(result.get(), StaffDTO.class);
//        }
//
//        // Response
//        ResponseJson<StaffDTO> response = new ResponseJson<>(staffDTO);
//        return ResponseEntity.status(HttpStatus.OK).body(response);
//    }

    
}
