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

import com.example.demo.entity.Company;
import com.example.demo.repo.CompanyRepo;

class CompanyServiceTest {
    
    @InjectMocks
    private CompanyService companyService;
    
    @Mock
    private CompanyRepo companyRepository;
    
    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    
    @Test
    void testGetAllCompanies() {
        List<Company> companies = Arrays.asList(new Company(1, "MSME123", "GST123", null), new Company(2, "MSME456", "GST456", null));
        when(companyRepository.findAll()).thenReturn(companies);
        
        List<Company> result = companyService.findAllCompanies();
        
        assertEquals(2, result.size());
        assertEquals("MSME123", result.get(0).getMsme_cert_no());
    }
}