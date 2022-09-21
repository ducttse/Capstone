package com.mindstone.backend.exception;

public class CustomException extends RuntimeException{
    private static final long serialVersionUID = 1L;
    private final int statusCode;

    public CustomException(int statusCode, String message) {
        super(message);
        this.statusCode = statusCode;
    }

    public int getStatusCode() {
        return statusCode;
    }
}
