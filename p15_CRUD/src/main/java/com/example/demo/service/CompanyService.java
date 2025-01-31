package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.demo.entity.Company;
import com.example.demo.repository.CompanyRepository;

@Service
public class CompanyService {

	@Autowired
	CompanyRepository compRepo;
	
	
	public Company saveComp(Company comp) {
		return compRepo.save(comp);
	}
}
