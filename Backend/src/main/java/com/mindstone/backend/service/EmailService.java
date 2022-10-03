package com.mindstone.backend.service;

import com.mindstone.backend.dto.EmailDetails;

public interface EmailService {
    Boolean sendEmail(EmailDetails details);
}
