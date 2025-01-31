package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.CompanyProduct;
import com.example.demo.service.CompProdService;

@RestController
public class CompProdController {

	@Autowired
	CompProdService cpserv;
	
	@GetMapping("/getAllCompProd")
	public List<CompanyProduct> getAllCompProd() {
		return cpserv.getAllCompProd();
	}
	
}
