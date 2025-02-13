package com.example.demo.controller;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import java.util.Arrays;
import java.util.List;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.ResponseEntity;

class FileControllerTest {
    
    @InjectMocks
    private FileController fileController;
    
    private final String uploadPath = "C:/Users/admin/Desktop/CDAC/Project/Folder_Java/AssetImage/";
    
    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    
    @Test
    void testServeFile() throws Exception {
        Path filePath = Paths.get(uploadPath).resolve("test.jpg").normalize();
        Resource resource = new UrlResource(filePath.toUri());
        
        ResponseEntity<Resource> response = fileController.serveFile("test.jpg");
        
        assertNotNull(response);
    }
}