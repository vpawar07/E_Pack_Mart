package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
//import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "company")
public class Company {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int company_id;
	
	String msme_cert_no;
	
	String gst_no;
	
	@OneToOne
	@JoinColumn(name = "user_id")
	User user_id;

	public Company() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Company(int comapny_id, String msme_cert_no, String gst_no, User user_id) {
		super();
		this.company_id = comapny_id;
		this.msme_cert_no = msme_cert_no;
		this.gst_no = gst_no;
		this.user_id = user_id;
	}

	public int getComapny_id() {
		return company_id;
	}

	public void setComapny_id(int comapny_id) {
		this.company_id = comapny_id;
	}

	public String getMsme_cert_no() {
		return msme_cert_no;
	}

	public void setMsme_cert_no(String msme_cert_no) {
		this.msme_cert_no = msme_cert_no;
	}

	public String getGst_no() {
		return gst_no;
	}

	public void setGst_no(String gst_no) {
		this.gst_no = gst_no;
	}

	public User getUser_id() {
		return user_id;
	}

	public void setUser_id(User user_id) {
		this.user_id = user_id;
	}
	
	
}
