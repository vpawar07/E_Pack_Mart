package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.State;
import com.example.demo.repository.StateRepository;

@Service
public class StateService {

	@Autowired
	StateRepository staterepo;
	
	public List<State> getStates(){
		return staterepo.findAll();
	}
}
