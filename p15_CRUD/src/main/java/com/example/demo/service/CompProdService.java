package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.CompanyProduct;
import com.example.demo.repository.CompProdRepository;

import jakarta.transaction.Transactional;

@Service
public class CompProdService {

	@Autowired
	CompProdRepository cprepo;
	
	public List<CompanyProduct> getAllCompProd(){
		return cprepo.findAll();
	}
	
	public CompanyProduct saveCompProd(CompanyProduct cp) {
		return cprepo.save(cp);
	}
	
	@Transactional
	public boolean upload(int id, byte [] photo) {
		System.out.println("Heloooooooooo");
		
		int count= cprepo.uploadPhoto(id, photo);
		System.out.println("Count is :"+count);
		 if(count==1)
			 return true;
		 else
			 return false;
	}
}
