package com.example.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.User;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {

@Query("From User where email=?1 and password=?2") 
public User loginData(String email,String password);
boolean existsByEmail(String email);
boolean existsByPancard(String pancard);


}
	