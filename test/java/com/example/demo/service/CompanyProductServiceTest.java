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

import com.example.demo.entity.CompanyProduct;
import com.example.demo.repo.CompanyProductRepository;

class CompanyProductServiceTest {
    
    @InjectMocks
    private CompanyProductService companyProductService;
    
    @Mock
    private CompanyProductRepository companyProductRepository;
    
    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    
    @Test
    void testGetAllCompanyProducts() {
        List<CompanyProduct> products = Arrays.asList(new CompanyProduct(), new CompanyProduct());
        when(companyProductRepository.findAll()).thenReturn(products);
        
        List<CompanyProduct> result = companyProductService.getAllCompanyProducts();
        
        assertEquals(2, result.size());
    }
}