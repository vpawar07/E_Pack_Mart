package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Company;
import com.example.demo.entity.UserHelper;
import com.example.demo.entity.LoginHelper;
import com.example.demo.entity.User;
import com.example.demo.service.CompanyService;
import com.example.demo.service.UserService;

@CrossOrigin(origins = "http://localhost:3015")
@RestController
public class UserController {

	@Autowired
	UserService userserv;
	
	@Autowired
	CompanyService companyserv;
	
	
	@GetMapping("/getUsers")
	public List<User> getUsers() {
		return userserv.getAllUser();
	}
	
	@PostMapping("/registerCustomer")
	public User saveCustomer(@RequestBody UserHelper cust) {
		
		User u = new User();
		u.setEmail(cust.getEmail());
		u.setName(cust.getName());
		u.setPassword(cust.getPassword());
		u.setCity(cust.getCity());
		u.setAddress(cust.getAddress());
		u.setPancard(cust.getPancard());
		u.setRole_id(cust.getRole_id());
		return userserv.insertCustomer(u);	
	}
	
	
	@PostMapping("/registerCompany")
	public void saveCompany(@RequestBody UserHelper comp) {
		User u = new User();
		u.setEmail(comp.getEmail());
		u.setName(comp.getName());
		u.setPassword(comp.getPassword());
		u.setCity(comp.getCity());
		u.setAddress(comp.getAddress());
		u.setPancard(comp.getPancard());
		u.setRole_id(comp.getRole_id());
		userserv.insertCustomer(u);
		Company c = new Company();
		c.setMsme_cert_no(comp.getMsme_cert_no());
		c.setGst_no(comp.getGst_no());
		c.setUser_id(u);
		
	}
	
	@PostMapping("/login")
	public Object login(@RequestBody LoginHelper lhelp) {
		System.out.println(lhelp);
		return userserv.loginCheck(lhelp);
	}
	
	@PutMapping("/updateCustomer/{userId}")
	public int updateCust(@PathVariable int userId,@RequestBody User u) {
		return userserv.updateCustomer(userId, u.getEmail(), u.getName(), u.getPassword(), u.getCity(), u.getAddress(), u.getPancard(), u.getRole_id());
	}
	
	@GetMapping("/getU/{comp}")
	public User getU(@PathVariable int comp) {
		return userserv.getU(comp);
	}
	
	
	@PutMapping("/updateCompany/{compId}")
	public int updateUser(@PathVariable int compId,@RequestBody UserHelper u) {
		return userserv.updateComp(compId, u.getEmail(), u.getName(), u.getPassword(), u.getCity(), u.getAddress(), u.getPancard(), u.getRole_id(), u.getMsme_cert_no(), u.getGst_no());
		
	}
	
	
	
	
	
	
	
	
	
	
	
}
