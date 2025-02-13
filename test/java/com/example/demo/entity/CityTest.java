package com.example.demo.entity;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

class CityTest {
    
    @Test
    void testCityConstructorAndGetters() {
        City city = new City(1, "Mumbai", null);
        assertEquals(1, city.getCity_id());
        assertEquals("Mumbai", city.getCity_name());
    }
    
    @Test
    void testSetters() {
        City city = new City();
        city.setCity_id(2);
        city.setCity_name("Delhi");
        
        assertEquals(2, city.getCity_id());
        assertEquals("Delhi", city.getCity_name());
    }
}
