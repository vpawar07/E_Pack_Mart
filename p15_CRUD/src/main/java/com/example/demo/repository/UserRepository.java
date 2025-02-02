package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.City;
import com.example.demo.entity.Role;
import com.example.demo.entity.User;

import jakarta.transaction.Transactional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

//	@Query("select u from User u where u.email = :email_id and u.password = :pwd")
//	@Query("From User where email= ?1and password= ?2")
	
	
	
	@Query("select u from User u where u.email = :email and u.password = :pwd")
	public User loginCheck(String email, String pwd);
	
	@Transactional
	@Modifying
	@Query("update User u set u.email= :email, u.name= :name, u.password= :password, u.city_id = :city_id, u.address = :address, u.pancard = :pancard ,u.role_id = :role_id where u.user_id= :user_id")
	public int updateUser(int user_id, String email, String name, String password, City city_id, String address, String pancard, Role role_id);
	
	
	
	@Query("select c.user_id from Company c where c.company_id = :comp_id")
	public Optional<User> getUserIdByComp(int comp_id);
	
	
	@Transactional
	@Modifying
	@Query("update Company c set c.msme_cert_no = :msme_cert_no, c.gst_no=:gst_no, c.user_id = :user_id where c.company_id=:comp_id")
	public int updateComp(int comp_id, String msme_cert_no, String gst_no, User user_id);
	
}
