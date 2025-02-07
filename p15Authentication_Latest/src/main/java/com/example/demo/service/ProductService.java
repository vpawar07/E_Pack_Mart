package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Product;
import com.example.demo.repo.ProductRepository;

@Service
public class ProductService {

	@Autowired
	ProductRepository prodrepo;
	
	public List<Product> getAllProducts(){
		return prodrepo.findAll();
	}
}
