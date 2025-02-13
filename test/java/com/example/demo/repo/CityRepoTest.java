package com.example.demo.repo;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.example.demo.entity.City;

class CityRepositoryTest {
    
    @Mock
    private CityRepo cityRepository;
    
    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    
    @Test
    void testFindById() {
        City city = new City(1, "Mumbai", null);
        when(cityRepository.findById(1)).thenReturn(Optional.of(city));
        
        Optional<City> result = cityRepository.findById(1);
        assertTrue(result.isPresent());
        assertEquals("Mumbai", result.get().getCity_name());
    }
}