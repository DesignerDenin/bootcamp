package com.example.restservice;

public record Book(long id, String title) {
    public String title(){
        return this.title;
    }

}