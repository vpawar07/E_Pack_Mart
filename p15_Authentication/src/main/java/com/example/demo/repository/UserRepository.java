package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {

//	@Query("select u from User u where u.email = :email_id and u.password = :pwd")
//	@Query("From User where email= ?1and password= ?2")
	
	@Query("select u from User u where u.email = :email_id and u.password = :pwd")
	public Optional<User> loginCheck(String email_id, String pwd);
}
