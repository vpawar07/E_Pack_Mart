package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Role;
import com.example.demo.service.RoleService;

@CrossOrigin(origins = "http://localhost:3015")
@RestController
public class RoleContoller {

	@Autowired
	RoleService roleserv;
	
	@GetMapping("/getAllRoles")
	public List<Role> getAllRoles(){
		return roleserv.getRoles();
	}
}
