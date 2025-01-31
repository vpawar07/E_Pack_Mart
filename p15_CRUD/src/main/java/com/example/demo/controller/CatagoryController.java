package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Category;
import com.example.demo.service.CategoryService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CatagoryController {

	@Autowired
	CategoryService catserv;
	
	@GetMapping("/getAllCategories")
	public List<Category> getAllCategories(){
		return catserv.getAllCategories();
	}
}
