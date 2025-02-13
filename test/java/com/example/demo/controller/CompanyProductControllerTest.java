package com.example.demo.controller;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.Map;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.example.demo.entity.CompanyProduct;
import com.example.demo.service.CompanyProductService;

class CompanyProductControllerTest {
    
    @InjectMocks
    private CompanyProductController companyProductController;
    
    @Mock
    private CompanyProductService companyProductService;
    
    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    
    @Test
    void testGetAllCompanyProducts() {
        List<CompanyProduct> products = Arrays.asList(new CompanyProduct(), new CompanyProduct());
        when(companyProductService.getAllCompanyProducts()).thenReturn(products);
        
        List<CompanyProduct> result = companyProductController.getAllComProd();
        
        assertEquals(2, result.size());
    }
}
