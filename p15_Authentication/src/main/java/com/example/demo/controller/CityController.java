package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.City;
import com.example.demo.service.CityService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CityController {

	@Autowired
	CityService cityserv;
	@GetMapping("/getCities")
	public List<City> getCities(){
		return cityserv.getAllCity();
	}
}
