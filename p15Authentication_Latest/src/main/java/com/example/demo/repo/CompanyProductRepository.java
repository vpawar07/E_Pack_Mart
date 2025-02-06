package com.example.demo.repo;

import com.example.demo.controller.CompanyProductController;
import com.example.demo.entity.CompanyProduct;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyProductRepository extends JpaRepository<CompanyProduct, Integer> {



	
	    List<CompanyProduct> findByCompany_CompanyId(int companyId);
	

}
