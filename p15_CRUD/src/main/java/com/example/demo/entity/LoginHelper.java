package com.example.demo.entity;

public class LoginHelper {
	
	String email;
	
	String password;

	public LoginHelper() {
		super();
		// TODO Auto-generated constructor stub
	}

	public LoginHelper(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "LoginHelper [email=" + email + ", password=" + password + "]";
	}
	
	
	
}
