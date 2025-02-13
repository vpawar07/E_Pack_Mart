package com.example.demo.repo;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.example.demo.entity.Category;

class CategoryRepositoryTest {
    
    @Mock
    private CategoryRepository categoryRepository;
    
    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    
    @Test
    void testFindById() {
        Category category = new Category(1, "Electronics");
        when(categoryRepository.findById(1)).thenReturn(Optional.of(category));
        
        Optional<Category> result = categoryRepository.findById(1);
        assertTrue(result.isPresent());
        assertEquals("Electronics", result.get().getCat_name());
    }
}