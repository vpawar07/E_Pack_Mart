package com.example.demo.entity;

public class ComUser {
	String email;
	String name;
	String password;
	String address;
	String pancard;
	City city_id;
	Role role_id;
	String msme_cert_no;
	String gst_no;
	/**
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}
	/**
	 * @param email the email to set
	 */
	public void setEmail(String email) {
		this.email = email;
	}
	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}
	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}
	/**
	 * @return the password
	 */
	public String getPassword() {
		return password;
	}
	/**
	 * @param password the password to set
	 */
	public void setPassword(String password) {
		this.password = password;
	}
	/**
	 * @return the address
	 */
	public String getAddress() {
		return address;
	}
	/**
	 * @param address the address to set
	 */
	public void setAddress(String address) {
		this.address = address;
	}
	/**
	 * @return the pancard
	 */
	public String getPancard() {
		return pancard;
	}
	/**
	 * @param pancard the pancard to set
	 */
	public void setPancard(String pancard) {
		this.pancard = pancard;
	}
	/**
	 * @return the city_id
	 */
	public City getCity_id() {
		return city_id;
	}
	/**
	 * @param city_id the city_id to set
	 */
	public void setCity_id(City city_id) {
		this.city_id = city_id;
	}
	/**
	 * @return the role_id
	 */
	public Role getRole_id() {
		return role_id;
	}
	/**
	 * @param role_id the role_id to set
	 */
	public void setRole_id(Role role_id) {
		this.role_id = role_id;
	}
	/**
	 * @return the msme_cert_no
	 */
	public String getMsme_cert_no() {
		return msme_cert_no;
	}
	/**
	 * @param msme_cert_no the msme_cert_no to set
	 */
	public void setMsme_cert_no(String msme_cert_no) {
		this.msme_cert_no = msme_cert_no;
	}
	/**
	 * @return the gst_no
	 */
	public String getGst_no() {
		return gst_no;
	}
	/**
	 * @param gst_no the gst_no to set
	 */
	public void setGst_no(String gst_no) {
		this.gst_no = gst_no;
	}
	public ComUser(String email, String name, String password, String address, String pancard, City city_id,
			Role role_id, String msme_cert_no, String gst_no) {
		super();
		this.email = email;
		this.name = name;
		this.password = password;
		this.address = address;
		this.pancard = pancard;
		this.city_id = city_id;
		this.role_id = role_id;
		this.msme_cert_no = msme_cert_no;
		this.gst_no = gst_no;
	}
	public ComUser() {
		super();
		// TODO Auto-generated constructor stub
	}
}
