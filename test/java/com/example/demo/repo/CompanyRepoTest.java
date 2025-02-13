package com.example.demo.repo;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.example.demo.entity.Company;

class CompanyRepositoryTest {
    
    @Mock
    private CompanyRepo companyRepository;
    
    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    
    @Test
    void testFindById() {
        Company company = new Company(1, "MSME123", "GST123", null);
        when(companyRepository.findById(1)).thenReturn(Optional.of(company));
        
        Optional<Company> result = companyRepository.findById(1);
        assertTrue(result.isPresent());
        assertEquals("MSME123", result.get().getMsme_cert_no());
    }
}