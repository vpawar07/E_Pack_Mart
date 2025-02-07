package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.City;
import com.example.demo.entity.LoginHelper;
import com.example.demo.entity.Role;
import com.example.demo.entity.User;
import com.example.demo.repository.CompanyRepository;
import com.example.demo.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository userrepo;
	
	@Autowired
	CompanyRepository comprepo;
	
	public List<User> getAllUser(){
		return userrepo.findAll();
	}
	
	public User insertCustomer(User cust) {
		return userrepo.save(cust);
	}
	
	public Object loginCheck(LoginHelper obj) {
		System.out.println(obj);
		
		User u= userrepo.loginCheck(obj.getEmail(), obj.getPassword());
		if(u.getRole_id().getRole_id()==2) {
			return comprepo.getCompanyByUserId(u.getUser_id());
		}

		System.out.println(u);
		return u;
	}
	
	public int updateCustomer(int user_id, String email, String name, String password, City city_id, String address, String pancard, Role role_id) {
		System.out.println("called");
		return userrepo.updateUser(user_id, email, name, password, city_id, address, pancard, role_id);
	}
	
	public User getU(int uid) {
		User u;
		Optional<User> ol = userrepo.getUserIdByComp(uid);
		try {
			u = ol.get();
		}
		catch(Exception e){
			u = null;
		}
		return u;
	}

	public int updateComp(int comp_id, String email, String name, String password, City city_id, String address, String pancard, Role role_id, String msme_cert_no, String gst_no) {
		User user_id= getU(comp_id);
		userrepo.updateUser(user_id.getUser_id(), email, name, password, city_id, address, pancard, role_id);
		return userrepo.updateComp(comp_id, msme_cert_no, gst_no, user_id);
	}
}





