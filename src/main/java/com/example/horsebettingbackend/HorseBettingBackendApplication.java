package com.example.horsebettingbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
public class HorseBettingBackendApplication {
    @GetMapping("/")
    public String hello(){
        return "hello";
    }

    public static void main(String[] args) {
        SpringApplication.run(HorseBettingBackendApplication.class, args);
    }

}
