package com.example.demo.entity;

public class UserHelper {
	
	String email;
	
	String name;
	
	String password;
	
	City city;
	
	String address;
	
	String pancard;

	Role role_id;
	

	
	String msme_cert_no;
	
	String gst_no;
	
	//User user_id;

	public UserHelper() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

public UserHelper(String email, String name, String password, City city, String address, String pancard,
			Role role_id, String msme_cert_no, String gst_no) {
		super();
		this.email = email;
		this.name = name;
		this.password = password;
		this.city = city;
		this.address = address;
		this.pancard = pancard;
		this.role_id = role_id;
		this.msme_cert_no = msme_cert_no;
		this.gst_no = gst_no;
	}



//	public CompanyHelper(String email, String name, String password, City city, String address, String pancard,
//			Role role_id, String msme_cert_no, String gst_no, User user_id) {
//		super();
//		this.email = email;
//		this.name = name;
//		this.password = password;
//		this.city = city;
//		this.address = address;
//		this.pancard = pancard;
//		this.role_id = role_id;
//		this.msme_cert_no = msme_cert_no;
//		this.gst_no = gst_no;
//		this.user_id = user_id;
//	}

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
		return city;
	}

	public void setCity(City city) {
		this.city = city;
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

	public String getMsme_cert_no() {
		return msme_cert_no;
	}

	public void setMsme_cert_no(String msme_cert_no) {
		this.msme_cert_no = msme_cert_no;
	}

	public String getGst_no() {
		return gst_no;
	}

	public void setGst_no(String gst_no) {
		this.gst_no = gst_no;
	}

//	public User getUser_id() {
//		return user_id;
//	}
//
//	public void setUser_id(User user_id) {
//		this.user_id = user_id;
//	}
	
	
	
}
