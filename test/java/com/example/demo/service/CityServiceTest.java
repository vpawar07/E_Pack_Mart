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

import com.example.demo.entity.City;
import com.example.demo.repo.CityRepo;

class CityServiceTest {
    
    @InjectMocks
    private CityService cityService;
    
    @Mock
    private CityRepo cityRepository;
    
    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    
    @Test
    void testGetAllCities() {
        List<City> cities = Arrays.asList(new City(1, "Mumbai", null), new City(2, "Delhi", null));
        when(cityRepository.findAll()).thenReturn(cities);
        
        List<City> result = cityService.getAllCity();
        
        assertEquals(2, result.size());
        assertEquals("Mumbai", result.get(0).getCity_name());
    }
}