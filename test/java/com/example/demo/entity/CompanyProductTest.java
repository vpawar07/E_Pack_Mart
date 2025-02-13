package com.example.demo.entity;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

class CompanyProductTest {
    
    @Test
    void testCompanyProductConstructorAndGetters() {
        CompanyProduct product = new CompanyProduct();
        product.setProdWeight(2.5f);
        assertEquals(2.5f, product.getProdWeight());
    }
    
    @Test
    void testSetters() {
        CompanyProduct product = new CompanyProduct();
        product.setProdSize("Medium");
        assertEquals("Medium", product.getProdSize());
    }
}
