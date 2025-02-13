package com.example.demo.repo;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.example.demo.entity.User;

class UserRepoTest {
    
    @Mock
    private UserRepo userRepo;
    
    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    
    @Test
    void testFindById() {
        User user = new User(1, "test@example.com", "Test User", "password", "Address", "PAN123", null, null);
        when(userRepo.findById(1)).thenReturn(Optional.of(user));
        
        Optional<User> result = userRepo.findById(1);
        assertTrue(result.isPresent());
        assertEquals("test@example.com", result.get().getEmail());
    }
}