package com.example.demo.entity;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

class StateTest {
    
    @Test
    void testStateConstructorAndGetters() {
        State state = new State(1, "Maharashtra");
        assertEquals(1, state.getState_id());
        assertEquals("Maharashtra", state.getState_name());
    }
    
    @Test
    void testSetters() {
        State state = new State();
        state.setState_id(2);
        state.setState_name("Gujarat");
        assertEquals(2, state.getState_id());
        assertEquals("Gujarat", state.getState_name());
    }
}