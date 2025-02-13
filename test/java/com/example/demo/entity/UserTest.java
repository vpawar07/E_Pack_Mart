
package com.example.demo.entity;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

class UserTest {
    @Test
    void testUserConstructorAndGetters() {
        User user = new User(1, "test@example.com", "Test User", "password", "Address", "PAN123", null, null);
        assertEquals(1, user.getUser_id());
        assertEquals("test@example.com", user.getEmail());
    }
    
    @Test
    void testSetters() {
        User user = new User();
        user.setUser_id(2);
        user.setEmail("new@example.com");
        assertEquals(2, user.getUser_id());
        assertEquals("new@example.com", user.getEmail());
    }
}