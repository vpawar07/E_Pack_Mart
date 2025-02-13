package com.example.demo.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.example.demo.entity.Role;
import com.example.demo.repo.RoleRepo;

class RoleServiceTest {
    
    @InjectMocks
    private RoleService roleService;
    
    @Mock
    private RoleRepo roleRepository;
    
    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    
    @Test
    void testGetAllRoles() {
        List<Role> roles = Arrays.asList(new Role(1, "Admin"), new Role(2, "User"));
        when(roleRepository.findAll()).thenReturn(roles);
        
        List<Role> result = roleService.findAllRoll();
        
        assertEquals(2, result.size());
        assertEquals("Admin", result.get(0).getRole_type());
    }
}
