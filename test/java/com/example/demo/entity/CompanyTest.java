package com.example.demo.entity;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

class CompanyTest {
    
    @Test
    void testCompanyConstructorAndGetters() {
        Company company = new Company(1, "MSME123", "GST123", null);
        assertEquals(1, company.getCompany_id());
        assertEquals("MSME123", company.getMsme_cert_no());
    }
    
    @Test
    void testSetters() {
        Company company = new Company();
        company.setCompany_id(2);
        company.setMsme_cert_no("MSME456");
        
        assertEquals(2, company.getCompany_id());
        assertEquals("MSME456", company.getMsme_cert_no());
    }
}
