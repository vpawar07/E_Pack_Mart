package com.example.demo.controller;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.Map;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.example.demo.entity.Role;
import com.example.demo.service.RoleService;

class RoleControllerTest {
    
    @InjectMocks
    private RoleController roleController;
    
    @Mock
    private RoleService roleService;
    
    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    
    @Test
    void testGetAllRoles() {
        List<Role> roles = Arrays.asList(new Role(1, "Admin"), new Role(2, "User"));
        when(roleService.findAllRoll()).thenReturn(roles);
        
        List<Role> result = roleController.getAllRolles();
        
        assertEquals(2, result.size());
        assertEquals("Admin", result.get(0).getRole_type());
    }
}
