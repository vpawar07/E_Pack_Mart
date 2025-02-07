package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.City;

@Repository
public interface CityRepo extends JpaRepository<City, Integer>{

}
