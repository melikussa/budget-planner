package com.budgetplanner.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hello")
public class HelloController {
    
    @GetMapping("")
    public String sayHello() {
        return "Hello!";
    }

    @GetMapping("/lika")
    public String sayHelloLika() {
        return "Hello, Lika!";
    }

    @GetMapping("/jimmy")
    public String sayHelloJimmy() {
        return "Hello, Lika!";
    }
}
