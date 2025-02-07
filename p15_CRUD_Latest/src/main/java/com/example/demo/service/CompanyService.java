package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Company;
import com.example.demo.repo.CompanyRepo;

@Service
public class CompanyService {
	
	@Autowired
	CompanyRepo comRepoRef;
	
	
	
	public Company save(Company user) {
	return comRepoRef.save(user);	
	}
	
	public List<Company>findAllCompanies(){
		return comRepoRef.findAll();
	}
	
	
	// GST No is unique or not//checkGST
//		public boolean checkGST(String gst_no) {
//		    return comRepoRef.existsByGst_no(gst_no); // corrected from 'exitsByGst_no' to 'existsByGst_no'
//		}
//
//		// MSME No is unique or not
//		public boolean checkMSME(String msme_cert_no) {
//		    return comRepoRef.existsByMsme_cert_no(msme_cert_no);
//		}
}
