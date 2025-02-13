package com.example.demo.repo;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.example.demo.entity.CompanyProduct;

class CompanyProductRepositoryTest {
    
    @Mock
    private CompanyProductRepository companyProductRepository;
    
    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    
    @Test
    void testFindById() {
        CompanyProduct product = new CompanyProduct();
        when(companyProductRepository.findById(1)).thenReturn(Optional.of(product));
        
        Optional<CompanyProduct> result = companyProductRepository.findById(1);
        assertTrue(result.isPresent());
    }
}