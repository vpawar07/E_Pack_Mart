package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
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
	
	Float prod_weight;
	
	String prod_size;
	
	String material_type;
	
	String prod_description;
	
	Integer stock;
	
	Double prod_price;
	

	String prod_shape;
	
	String prod_design_type;
	
	String prod_color;
	
	Integer box_capacity;
	
	String material_thickness;
	
	String closure_type;
	

	@Lob
    @Column(columnDefinition = "LONGBLOB")
	byte [] prod_image;


	public CompanyProduct() {
		super();
		// TODO Auto-generated constructor stub
	}


	public CompanyProduct(int comp_prod_id, Product product_id, Company company_id, Float prod_weight, String prod_size,
			String material_type, String prod_description, Integer stock, Double prod_price, String prod_shape,
			String prod_design_type, String prod_color, Integer box_capacity, String material_thickness,
			String closure_type, byte[] prod_image) {
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
		this.prod_shape = prod_shape;
		this.prod_design_type = prod_design_type;
		this.prod_color = prod_color;
		this.box_capacity = box_capacity;
		this.material_thickness = material_thickness;
		this.closure_type = closure_type;
		this.prod_image = prod_image;
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


	public Float getProd_weight() {
		return prod_weight;
	}


	public void setProd_weight(Float prod_weight) {
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


	public Integer getStock() {
		return stock;
	}


	public void setStock(Integer stock) {
		this.stock = stock;
	}


	public Double getProd_price() {
		return prod_price;
	}


	public void setProd_price(Double prod_price) {
		this.prod_price = prod_price;
	}


	public String getProd_shape() {
		return prod_shape;
	}


	public void setProd_shape(String prod_shape) {
		this.prod_shape = prod_shape;
	}


	public String getProd_design_type() {
		return prod_design_type;
	}


	public void setProd_design_type(String prod_design_type) {
		this.prod_design_type = prod_design_type;
	}


	public String getProd_color() {
		return prod_color;
	}


	public void setProd_color(String prod_color) {
		this.prod_color = prod_color;
	}


	public Integer getBox_capacity() {
		return box_capacity;
	}


	public void setBox_capacity(Integer box_capacity) {
		this.box_capacity = box_capacity;
	}


	public String getMaterial_thickness() {
		return material_thickness;
	}


	public void setMaterial_thickness(String material_thickness) {
		this.material_thickness = material_thickness;
	}


	public String getClosure_type() {
		return closure_type;
	}


	public void setClosure_type(String closure_type) {
		this.closure_type = closure_type;
	}


	public byte[] getProd_image() {
		return prod_image;
	}


	public void setProd_image(byte[] prod_image) {
		this.prod_image = prod_image;
	}
	
	
	

}