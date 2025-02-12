package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Product;
import com.example.demo.repo.ProductRepository;
import com.example.demo.service.ProductService;

//@CrossOrigin(origins = "http://localhost:3015")
@RequestMapping("/api/crud")
@RestController
public class ProductController {

	@Autowired
	ProductService prodserv;
	
	@Autowired
	ProductRepository prodrepo;
	
	@GetMapping("/getAllProducts")
	public List<Product> getAllProducts(){
		return prodserv.getAllProducts();
	}
	
	@PostMapping("/saveProduct")
	public Product save(@RequestBody Product product) {
		return prodrepo.save(product);
	}
	
}
