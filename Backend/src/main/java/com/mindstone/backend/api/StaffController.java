package com.mindstone.backend.api;

import com.mindstone.backend.constant.StringConstant;
import com.mindstone.backend.dto.StaffDTO;
import com.mindstone.backend.dto.UserDTO;
import com.mindstone.backend.entity.Staff;
import com.mindstone.backend.entity.User;
import com.mindstone.backend.request.PagedFilterRequest;
import com.mindstone.backend.request.StaffAddRequest;
import com.mindstone.backend.request.StaffUpdateRequest;
import com.mindstone.backend.response.MetaData;
import com.mindstone.backend.response.ResponseJson;
import com.mindstone.backend.service.StaffService;
import com.mindstone.backend.util.EncryptSHA256;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api/staff")
@AllArgsConstructor
public class StaffController {

    private final Integer STAFF_ROLE_ID = 2;

    private ModelMapper modelMapper;

    final StaffService staffService;

    @PostMapping
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

    @PutMapping("/{id}")
    public ResponseEntity<ResponseJson<StaffDTO>> updateStaff(@PathVariable Integer id, @RequestBody @Valid StaffUpdateRequest request) {

        ResponseJson<StaffDTO> response = new ResponseJson<>();

        Optional<Staff> result = staffService.getStaffProfileById(id);

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

    @GetMapping("/{id}")
    public ResponseEntity<ResponseJson<StaffDTO>> getStaffProfileById(@PathVariable Integer id) {
        // Get data
        Optional<Staff> result = staffService.getStaffProfileById(id);

        StaffDTO staffDTO = null;
        if (result.isPresent()) {
            staffDTO = modelMapper.map(result.get(), StaffDTO.class);
        }

        // Response
        ResponseJson<StaffDTO> response = new ResponseJson<>(staffDTO);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @GetMapping("/get-all")
    public ResponseEntity<ResponseJson<List<StaffDTO>>> getAll(@Valid PagedFilterRequest request) {
        Page<Staff> result = staffService.getAllActiveStaff(request);

        MetaData metaData = new MetaData(result.getNumber(), result.getSize(), result.getTotalPages(), result.getTotalElements());

        List<StaffDTO> staffDTOList = result
                .stream()
                .map(staff -> modelMapper.map(staff, StaffDTO.class))
                .collect(Collectors.toList());

        // Response
        ResponseJson<List<StaffDTO>> response = new ResponseJson<>(staffDTOList, metaData);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @DeleteMapping("/{id}")
    ResponseEntity<ResponseJson<StaffDTO>> disableStaff(@PathVariable Integer id) {
        ResponseJson<StaffDTO> response = new ResponseJson<>();

        Optional<Staff> result = staffService.getStaffProfileById(id);

        if (!result.isPresent()) {
            response.setStatusCode(HttpStatus.BAD_REQUEST.value());
            response.setMessage(StringConstant.MESSAGE.USER.NOT_FOUND);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        Staff staff = result.get();
        staff.setStatus(StringConstant.STATUS.INACTIVE);

        staffService.saveStaff(staff);

        StaffDTO staffDTO = modelMapper.map(staff, StaffDTO.class);
        response = new ResponseJson<>(staffDTO);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @GetMapping()
    public ResponseEntity<ResponseJson<List<StaffDTO>>> searchStaff(@Valid PagedFilterRequest request, String SearchText) {
        Page<Staff> result = staffService.searchStaff(request, SearchText);

        MetaData metaData = new MetaData(result.getNumber(), result.getSize(), result.getTotalPages(), result.getTotalElements());

        List<StaffDTO> staffDTOList = result
                .stream()
                .map(staff -> modelMapper.map(staff, StaffDTO.class))
                .collect(Collectors.toList());

        ResponseJson<List<StaffDTO>> response = new ResponseJson<>(staffDTOList, metaData);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }
}
