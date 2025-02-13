package com.example.demo.entity;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

class ProductTest {
    
    @Test
    void testProductConstructorAndGetters() {
        Product product = new Product();
        product.setProduct_name("Test Product");
        assertEquals("Test Product", product.getProduct_name());
    }
    
    @Test
    void testSetters() {
        Product product = new Product();
        product.setProduct_name("Updated Product");
        assertEquals("Updated Product", product.getProduct_name());
    }
}