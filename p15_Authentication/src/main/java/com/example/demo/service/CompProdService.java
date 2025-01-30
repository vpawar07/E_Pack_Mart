package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.CompanyProduct;
import com.example.demo.repository.CompProdRepository;

@Service
public class CompProdService {

	@Autowired
	CompProdRepository cprepo;
	
	public List<CompanyProduct> getAllCompProd(){
		return cprepo.findAll();
	}
}
