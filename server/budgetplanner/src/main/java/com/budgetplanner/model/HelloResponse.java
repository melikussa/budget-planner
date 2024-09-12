package com.budgetplanner.model;

public class HelloResponse {
    private String message;

    // Constructors
    public HelloResponse() {
    }

    public HelloResponse(String message) {
        this.message = message;
    }

    // Getters and setters
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}