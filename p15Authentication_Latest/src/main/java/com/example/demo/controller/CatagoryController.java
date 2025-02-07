package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Category;
import com.example.demo.entity.Product;
import com.example.demo.repo.CategoryRepository;
import com.example.demo.repo.ProductRepository;
import com.example.demo.service.CategoryService;

@CrossOrigin(origins = "http://localhost:3015")
@RequestMapping("/Category/api")
@RestController
public class CatagoryController {

	@Autowired
	CategoryService catserv;
	
	@Autowired
	CategoryRepository catrepo;
	
	
	
	@GetMapping("/getAllCategories")
	public List<Category> getAllCategories(){
		return catserv.getAllCategories();
	}
	
	@PostMapping("/saveCategory")
	public Category save(@RequestBody Category category) {
		
		return catrepo.save(category);
	}
	
	
}
