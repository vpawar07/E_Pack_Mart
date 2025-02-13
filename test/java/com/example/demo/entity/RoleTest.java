package com.example.demo.entity;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

class RoleTest {
    
    @Test
    void testRoleConstructorAndGetters() {
        Role role = new Role(1, "Admin");
        assertEquals(1, role.getRole_id());
        assertEquals("Admin", role.getRole_type());
    }
    
    @Test
    void testSetters() {
        Role role = new Role();
        role.setRole_id(2);
        role.setRole_type("User");
        assertEquals(2, role.getRole_id());
        assertEquals("User", role.getRole_type());
    }
}