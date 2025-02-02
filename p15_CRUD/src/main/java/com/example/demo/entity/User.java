package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "user")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int user_id;
	
	String email;
	
	String name;
	
	String password;
	
	@ManyToOne                 //(cascade = {CascadeType.MERGE, CascadeType.REFRESH})
	@JoinColumn(name = "city_id")
	City city_id;
	
	String address;
	
	String pancard;

	@ManyToOne                 //(cascade = {CascadeType.MERGE, CascadeType.REFRESH})
	@JoinColumn(name = "role_id")
	Role role_id;

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(int user_id, String email, String name, String password, City city, String address, String pancard,
			Role role_id) {
		super();
		this.user_id = user_id;
		this.email = email;
		this.name = name;
		this.password = password;
		this.city_id = city;
		this.address = address;
		this.pancard = pancard;
		this.role_id = role_id;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public City getCity() {
		return city_id;
	}

	public void setCity(City city) {
		this.city_id = city;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPancard() {
		return pancard;
	}

	public void setPancard(String pancard) {
		this.pancard = pancard;
	}

	public Role getRole_id() {
		return role_id;
	}

	public void setRole_id(Role role_id) {
		this.role_id = role_id;
	}

	@Override
	public String toString() {
		return "User [user_id=" + user_id + ", email=" + email + ", name=" + name + ", password=" + password
				+ ", city_id=" + city_id + ", address=" + address + ", pancard=" + pancard + ", role_id=" + role_id
				+ "]";
	}
	
	
	
}
