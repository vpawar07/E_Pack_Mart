package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.LoginHelper;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository userrepo;
	
	public List<User> getAllUser(){
		return userrepo.findAll();
	}
	
	public User insertCustomer(User cust) {
		return userrepo.save(cust);
	}
	
	public User loginCheck(LoginHelper obj) {
		System.out.println(obj);
		User u;
		Optional<User> ol = userrepo.loginCheck(obj.getEmail_id(), obj.getPassword());
		try {
			u = ol.get();
		}
		catch(Exception e){
			u = null;
		}
		return u;
	}

}
