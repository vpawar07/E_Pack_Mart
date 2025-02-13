package com.example.demo.repo;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.example.demo.entity.State;

class StateRepositoryTest {
    
    @Mock
    private StateRepo stateRepository;
    
    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    
    @Test
    void testFindById() {
        State state = new State(1, "Maharashtra");
        when(stateRepository.findById(1)).thenReturn(Optional.of(state));
        
        Optional<State> result = stateRepository.findById(1);
        assertTrue(result.isPresent());
        assertEquals("Maharashtra", result.get().getState_name());
    }
}
