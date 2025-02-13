package com.example.demo.entity;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

class ComUserTest {
    
    @Test
    void testComUserConstructorAndGetters() {
        ComUser comUser = new ComUser("user@example.com", "User Name", "password", "Address", "PAN123", null, null, "MSME123", "GST123");
        assertEquals("user@example.com", comUser.getEmail());
        assertEquals("User Name", comUser.getName());
    }
    
    @Test
    void testSetters() {
        ComUser comUser = new ComUser();
        comUser.setEmail("test@example.com");
        comUser.setName("Test User");
        
        assertEquals("test@example.com", comUser.getEmail());
        assertEquals("Test User", comUser.getName());
    }
}