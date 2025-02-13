package com.example.demo.controller;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.example.demo.entity.Category;
import com.example.demo.service.CategoryService;

class CategoryControllerTest {
    
    @InjectMocks
    private CatagoryController categoryController;
    
    @Mock
    private CategoryService categoryService;
    
    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    
    @Test
    void testGetAllCategories() {
        List<Category> categories = Arrays.asList(new Category(1, "Electronics"), new Category(2, "Clothing"));
        when(categoryService.getAllCategories()).thenReturn(categories);
        
        List<Category> result = categoryController.getAllCategories();
        
        assertEquals(2, result.size());
        assertEquals("Electronics", result.get(0).getCat_name());
    }
}