package com.example.demo.controller;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.example.demo.entity.User;
import com.example.demo.service.UserService;

class UserControllerTest {
    
    @InjectMocks
    private UserController userController;
    
    @Mock
    private UserService userService;
    
    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    
    @Test
    void testGetAllUsers() {
        List<User> users = Arrays.asList(new User(1, "test1@example.com", "Test User1", "password", "Address", "PAN1", null, null),
                                         new User(2, "test2@example.com", "Test User2", "password", "Address", "PAN2", null, null));
        when(userService.getAllUser()).thenReturn(users);
        
        List<User> result = userController.getAllUsers();
        
        assertEquals(2, result.size());
        assertEquals("test1@example.com", result.get(0).getEmail());
    }
}