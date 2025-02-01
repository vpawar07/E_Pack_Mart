package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Category;
import com.example.demo.repository.CategoryRepository;

@Service
public class CategoryService {

	@Autowired
	CategoryRepository catrepo;
	
	public List<Category> getAllCategories(){
		return catrepo.findAll();
	}
	
	public Category addCategory(Category cat) {
		return catrepo.save(cat);
	}
}
