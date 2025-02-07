package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entity.Company;

public interface CompanyRepository extends JpaRepository<Company, Integer> {

	
	@Query("SELECT c FROM Company c WHERE c.user_id.user_id = ?1")
	public Company getCompanyByUserId(int userId);
	
}
