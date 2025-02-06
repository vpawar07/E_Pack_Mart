package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.LoginEntity;
import com.example.demo.entity.User;
import com.example.demo.repo.CompanyRepo;
import com.example.demo.repo.UserRepo;

@Service
public class UserService {
	
	@Autowired
	UserRepo userRepoRef;
	
	@Autowired
	CompanyRepo companyRepoRef;
	
	//loginService Company
	
	// save a User
		public User save(User user) {
			return userRepoRef.save(user);
		}
		
	
	
	// loginService Customer
//	public User loginData(LoginEntity log) {
//		
//		return userRepoRef.loginData(log.getEmail(), log.getPassword());
//	}
		public Object loginData(String email, String password) {
		    User u = userRepoRef.loginData(email, password);
		    if (u != null) {
		        System.out.println("User found: " + u.getEmail() + " | Role ID: " + u.getRole_id().getRole_id());

		        if (u.getRole_id().getRole_id() == 1 || u.getRole_id().getRole_id() == 3) {
		            return u;
		        }
		        
		        Object obj = companyRepoRef.findCompanyByUser(u);
		        if (obj != null) {
		            System.out.println("Company object found: " + obj);
		            return obj;
		        } else {
		            System.out.println("Company not found for user: " + u.getEmail());
		        }
		    } else {
		        System.out.println("No user found with email: " + email);
		    }
		    return null;
		}

	
	// check Email is present or not 
	public boolean checkEmailId(String email) {
		return userRepoRef.existsByEmail(email);
	}
	  //Pancard is Unique or not
	public boolean checkPancard(String pancard) {
		return userRepoRef.existsByPancard(pancard);
	}
	
	// get all users
	public List<User> getAllUser(){
		return userRepoRef.findAll();
	}
	
	
	// get one user
	public User getOne(int userid) {
		Optional<User>op_user=userRepoRef.findById(userid);
		User user=null;
				try {
					user=op_user.get();
				}
				catch(Exception e) {
					e.printStackTrace();
				}
		return user;
	}
	//Update user name and email
	public String updateUser(User user) {
		Optional<User>opt_user=userRepoRef.findById(user.getUser_id());
		if(userRepoRef.existsById(user.getUser_id())) {
			User us=opt_user.get();
			us.setEmail(user.getName());
			return "User name updated successfully";
		}
		return "User details not found";
	}
	// delete one user
	public String deleteOne(int userid) {
		Optional<User>opt_user=userRepoRef.findById(userid);
		if(userRepoRef.existsById(userid)) {
			userRepoRef.delete(opt_user.get());
			return opt_user.get().getName()+": User Deleted Successfully";
		}
		return "User with id is not exit";
	}
	
}
