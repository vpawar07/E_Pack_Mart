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

import com.example.demo.entity.State;
import com.example.demo.service.StateService;

class StateControllerTest {
    
    @InjectMocks
    private StateController stateController;
    
    @Mock
    private StateService stateService;
    
    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    
    @Test
    void testGetAllStates() {
        List<State> states = Arrays.asList(new State(1, "Maharashtra"), new State(2, "Gujarat"));
        when(stateService.getAllState()).thenReturn(states);
        
        List<State> result = stateController.getAllState();
        
        assertEquals(2, result.size());
        assertEquals("Maharashtra", result.get(0).getState_name());
    }
}