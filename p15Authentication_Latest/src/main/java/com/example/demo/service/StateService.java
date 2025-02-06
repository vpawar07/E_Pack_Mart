package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.State;
import com.example.demo.repo.StateRepo;
@Service
public class StateService {
	@Autowired
	StateRepo stateRepoObj;
	
	public List<State>getAllState(){
		return stateRepoObj.findAll();
	}
}
