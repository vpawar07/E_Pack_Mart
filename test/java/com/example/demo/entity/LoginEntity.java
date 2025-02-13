package com.example.demo.entity;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

class LoginEntityTest {
    
    @Test
    void testLoginEntityConstructorAndGetters() {
        LoginEntity loginEntity = new LoginEntity("user@example.com", "password123");
        assertEquals("user@example.com", loginEntity.getEmail());
        assertEquals("password123", loginEntity.getPassword());
    }
    
    @Test
    void testSetters() {
        LoginEntity loginEntity = new LoginEntity();
        loginEntity.setEmail("test@example.com");
        loginEntity.setPassword("testpassword");
        
        assertEquals("test@example.com", loginEntity.getEmail());
        assertEquals("testpassword", loginEntity.getPassword());
    }
}
