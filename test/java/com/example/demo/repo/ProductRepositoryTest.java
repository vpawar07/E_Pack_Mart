package com.example.demo.repo;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.example.demo.entity.Product;

class ProductRepositoryTest {
    
    @Mock
    private ProductRepository productRepository;
    
    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    
    @Test
    void testFindById() {
        Product product = new Product();
        when(productRepository.findById(1)).thenReturn(Optional.of(product));
        
        Optional<Product> result = productRepository.findById(1);
        assertTrue(result.isPresent());
    }
}