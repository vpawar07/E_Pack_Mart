package com.example.demo.entity;

public class CompProdHelper {

//	int comp_prod_id;
	
	Product product_id;
	
	Company company_id;
	
	float prod_weight;
	
	String prod_size;
	
	String material_type;
	
	String prod_description;
	
	int stock;
	
	Double prod_price;

	public CompProdHelper() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CompProdHelper(Product product_id, Company company_id, float prod_weight, String prod_size,
			String material_type, String prod_description, int stock, Double prod_price) {
		super();
		this.product_id = product_id;
		this.company_id = company_id;
		this.prod_weight = prod_weight;
		this.prod_size = prod_size;
		this.material_type = material_type;
		this.prod_description = prod_description;
		this.stock = stock;
		this.prod_price = prod_price;
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
	
	
}
