package com.example.demo.controller;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.example.demo.entity.City;
import com.example.demo.service.CityService;

class CityControllerTest {
    
    @InjectMocks
    private CityController cityController;
    
    @Mock
    private CityService cityService;
    
    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    
    @Test
    void testGetAllCities() {
        List<City> cities = Arrays.asList(new City(1, "Mumbai", null), new City(2, "Delhi", null));
        when(cityService.getAllCity()).thenReturn(cities);
        
        List<City> result = cityController.getAllCity();
        
        assertEquals(2, result.size());
        assertEquals("Mumbai", result.get(0).getCity_name());
    }
}
