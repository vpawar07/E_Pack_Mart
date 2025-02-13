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

import com.example.demo.entity.State;
import com.example.demo.repo.StateRepo;

class StateServiceTest {
    
    @InjectMocks
    private StateService stateService;
    
    @Mock
    private StateRepo stateRepository;
    
    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    
    @Test
    void testGetAllStates() {
        List<State> states = Arrays.asList(new State(1, "Maharashtra"), new State(2, "Gujarat"));
        when(stateRepository.findAll()).thenReturn(states);
        
        List<State> result = stateService.getAllState();
        
        assertEquals(2, result.size());
        assertEquals("Maharashtra", result.get(0).getState_name());
    }
}