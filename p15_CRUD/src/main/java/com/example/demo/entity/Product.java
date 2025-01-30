package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "product")
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int product_id;
	
	String product_name;
	
	@ManyToOne
	@JoinColumn(name = "cat_id")
	Category cat_id;

	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Product(int product_id, String product_name, Category cat_id) {
		super();
		this.product_id = product_id;
		this.product_name = product_name;
		this.cat_id = cat_id;
	}

	public int getProduct_id() {
		return product_id;
	}

	public void setProduct_id(int product_id) {
		this.product_id = product_id;
	}

	public String getProduct_name() {
		return product_name;
	}

	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}

	public Category getCat_id() {
		return cat_id;
	}

	public void setCat_id(Category cat_id) {
		this.cat_id = cat_id;
	}
	
	
}
