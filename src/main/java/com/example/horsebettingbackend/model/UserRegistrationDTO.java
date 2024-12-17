package com.example.horsebettingbackend.model;

import lombok.Data;

@Data
public class UserRegistrationDTO {
    private String username;
    private String password;
    private String email;
    private String fullName;
}

