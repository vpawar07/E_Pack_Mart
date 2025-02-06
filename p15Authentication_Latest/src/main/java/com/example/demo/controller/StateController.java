package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.State;
import com.example.demo.service.StateService;

@RestController
//@CrossOrigin(origins = "http://localhost:3000")
@CrossOrigin(origins = "http://localhost:3015")
public class StateController {
	@Autowired
	StateService stateserviceobj;
	
	@GetMapping("/getAllStates")
	public List<State>getAllState(){
		return stateserviceobj.getAllState();
	}
}
