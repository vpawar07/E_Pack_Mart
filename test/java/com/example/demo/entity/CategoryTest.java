package com.example.demo.entity;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

class CategoryTest {
    
    @Test
    void testCategoryConstructorAndGetters() {
        Category category = new Category(1, "Electronics");
        assertEquals(1, category.getCat_id());
        assertEquals("Electronics", category.getCat_name());
    }
    
    @Test
    void testSetters() {
        Category category = new Category();
        category.setCat_id(2);
        category.setCat_name("Clothing");
        
        assertEquals(2, category.getCat_id());
        assertEquals("Clothing", category.getCat_name());
    }
}
