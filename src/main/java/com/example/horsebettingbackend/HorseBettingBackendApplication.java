package com.example.horsebettingbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HorseBettingBackendApplication {

    @Get

    public static void main(String[] args) {
        SpringApplication.run(HorseBettingBackendApplication.class, args);
    }

}
