package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "company_product")
public class CompanyProduct {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int comp_prod_id;
	
	@ManyToOne
	@JoinColumn(name = "product_id")
	Product product_id;
	
	@ManyToOne
	@JoinColumn(name = "company_id")
	Company company_id;
	
	float prod_weight;
	
	String prod_size;
	
	String material_type;
	
	String prod_description;
	
	int stock;
	
	Double prod_price;
	
	String image_url;

	public CompanyProduct() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CompanyProduct(int comp_prod_id, Product product_id, Company company_id, float prod_weight, String prod_size,
			String material_type, String prod_description, int stock, Double prod_price, String image_url) {
		super();
		this.comp_prod_id = comp_prod_id;
		this.product_id = product_id;
		this.company_id = company_id;
		this.prod_weight = prod_weight;
		this.prod_size = prod_size;
		this.material_type = material_type;
		this.prod_description = prod_description;
		this.stock = stock;
		this.prod_price = prod_price;
		this.image_url = image_url;
	}
	
	public int getComp_prod_id() {
		return comp_prod_id;
	}


	public void setComp_prod_id(int comp_prod_id) {
		this.comp_prod_id = comp_prod_id;
	}

	public Product getProduct_id() {
		return product_id;
	}

	public void setProduct_id(Product product_id) {
		this.product_id = product_id;
	}

	public Company getCompany_id() {
		return company_id;
	}

	public void setCompany_id(Company company_id) {
		this.company_id = company_id;
	}

	public float getProd_weight() {
		return prod_weight;
	}

	public void setProd_weight(float prod_weight) {
		this.prod_weight = prod_weight;
	}

	public String getProd_size() {
		return prod_size;
	}

	public void setProd_size(String prod_size) {
		this.prod_size = prod_size;
	}

	public String getMaterial_type() {
		return material_type;
	}

	public void setMaterial_type(String material_type) {
		this.material_type = material_type;
	}

	public String getProd_description() {
		return prod_description;
	}

	public void setProd_description(String prod_description) {
		this.prod_description = prod_description;
	}

	public int getStock() {
		return stock;
	}

	public void setStock(int stock) {
		this.stock = stock;
	}

	public Double getProd_price() {
		return prod_price;
	}

	public void setProd_price(Double prod_price) {
		this.prod_price = prod_price;
	}

	public String getImage_url() {
		return image_url;
	}

	public void setImage_url(String image_url) {
		this.image_url = image_url;
	}
	
	
}
