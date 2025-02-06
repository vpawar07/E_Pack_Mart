package com.example.demo.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Role;
import com.example.demo.repo.RoleRepo;
@Service
public class RoleService {

	@Autowired
	RoleRepo rolropObj;
	
	public List<Role> findAllRoll(){
		return rolropObj.findAll();
	}
}
