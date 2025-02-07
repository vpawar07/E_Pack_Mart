package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Role;
import com.example.demo.service.RoleService;

@RestController
public class RoleController {
	
	@Autowired
	RoleService rsObj;
	@GetMapping("/getRolles")
	public List<Role>getAllRolles(){
		return rsObj.findAllRoll();
	}
	
}
