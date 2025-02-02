package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.State;
import com.example.demo.service.StateService;

@CrossOrigin(origins = "http://localhost:3015")
@RestController
public class StateController {

	@Autowired
	StateService stateserv;
	
	@GetMapping("/getStates")
	public List<State> getAllStates(){
		return stateserv.getStates();
	}
}
