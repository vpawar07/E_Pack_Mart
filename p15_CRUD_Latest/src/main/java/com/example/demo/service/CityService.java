package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.City;
import com.example.demo.repo.CityRepo;

@Service
public class CityService {
	@Autowired
	CityRepo cityRepoRef;
	
	public List<City>getAllCity(){
		return cityRepoRef.findAll();
	}
}
