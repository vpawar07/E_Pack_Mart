package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Company;
import com.example.demo.entity.User;

@Repository
public interface CompanyRepo extends JpaRepository<Company, Integer> {

//	boolean existsByGst_no(String gst_no);
//	boolean existsByMsme_cert_no(String msme_cert_no);
	
	public Company findCompanyByUser(User user);
	
}
