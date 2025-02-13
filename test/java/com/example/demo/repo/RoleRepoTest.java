package com.example.demo.repo;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.example.demo.entity.Role;

class RoleRepositoryTest {
    
    @Mock
    private RoleRepo roleRepository;
    
    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    
    @Test
    void testFindById() {
        Role role = new Role(1, "Admin");
        when(roleRepository.findById(1)).thenReturn(Optional.of(role));
        
        Optional<Role> result = roleRepository.findById(1);
        assertTrue(result.isPresent());
        assertEquals("Admin", result.get().getRole_type());
    }
}
