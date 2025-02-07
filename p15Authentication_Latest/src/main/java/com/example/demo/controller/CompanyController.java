package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Company;
import com.example.demo.service.CompanyService;


@RestController
public class CompanyController {
	
	@Autowired
	CompanyService comSerObj;
	
//	@GetMapping("/getAllCompanies")
	@GetMapping("/getAllCompanies")
	public List<Company> getAllCompany(){
		return comSerObj.findAllCompanies();
	}
	
}
