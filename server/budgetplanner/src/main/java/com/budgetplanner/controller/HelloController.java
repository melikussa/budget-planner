package com.budgetplanner.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.budgetplanner.model.HelloResponse;

@RestController
@RequestMapping("/hello")
public class HelloController {
    
    @GetMapping("")
    public HelloResponse sayHello() {
        return new HelloResponse("Hello!");
    }

    @GetMapping("/lika")
    public HelloResponse sayHelloLika() {
        return  new HelloResponse("Hello, Lika!");
    }

    @GetMapping("/jimmy")
    public HelloResponse sayHelloJimmy() {
        return new HelloResponse("Hello, Jimmy!");
    }
}
