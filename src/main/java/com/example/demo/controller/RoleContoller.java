package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Role;
import com.example.demo.service.RoleService;

@RestController
public class RoleContoller {

	@Autowired
	RoleService roleserv;
	
	@GetMapping("/getAllRoles")
	public List<Role> getAllRoles(){
		return roleserv.getRoles();
	}
}
