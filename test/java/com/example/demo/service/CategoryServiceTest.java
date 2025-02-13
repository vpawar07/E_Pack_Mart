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

import com.example.demo.entity.Category;
import com.example.demo.repo.CategoryRepository;

class CategoryServiceTest {
    
    @InjectMocks
    private CategoryService categoryService;
    
    @Mock
    private CategoryRepository categoryRepository;
    
    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    
    @Test
    void testGetAllCategories() {
        List<Category> categories = Arrays.asList(new Category(1, "Electronics"), new Category(2, "Clothing"));
        when(categoryRepository.findAll()).thenReturn(categories);
        
        List<Category> result = categoryService.getAllCategories();
        
        assertEquals(2, result.size());
        assertEquals("Electronics", result.get(0).getCat_name());
    }
}