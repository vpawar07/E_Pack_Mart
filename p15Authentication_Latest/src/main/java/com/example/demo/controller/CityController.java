package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.City;
import com.example.demo.service.CityService;

@RestController
@CrossOrigin(origins = "http://localhost:3015")
public class CityController {
	@Autowired
	CityService cityServiceRepo;
	
	@GetMapping("/getAllCity")
	public List<City>getAllCity(){
		return cityServiceRepo.getAllCity();
	}
}
