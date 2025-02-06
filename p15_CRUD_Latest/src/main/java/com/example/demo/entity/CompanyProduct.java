
package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "company_product")
public class CompanyProduct {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int compProdId; 

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @ManyToOne
    @JoinColumn(name = "company_id", nullable = false)
    private Company company;

    private Float prodWeight;
    private String prodSize;
    private String materialType;
    private String prodDescription;
    private Integer stock;
    private Double prodPrice;
    private String prodShape;
    private String prodDesignType;
    private String prodColor;
    private Integer boxCapacity;
    private Integer materialThickness;
    private String closureType;

   
    private String prodImage;


	public CompanyProduct() {
		super();
		// TODO Auto-generated constructor stub
	}


	public CompanyProduct(int compProdId, Product product, Company company, Float prodWeight, String prodSize,
			String materialType, String prodDescription, Integer stock, Double prodPrice, String prodShape,
			String prodDesignType, String prodColor, Integer boxCapacity, Integer materialThickness, String closureType,
			String prodImage) {
		super();
		this.compProdId = compProdId;
		this.product = product;
		this.company = company;
		this.prodWeight = prodWeight;
		this.prodSize = prodSize;
		this.materialType = materialType;
		this.prodDescription = prodDescription;
		this.stock = stock;
		this.prodPrice = prodPrice;
		this.prodShape = prodShape;
		this.prodDesignType = prodDesignType;
		this.prodColor = prodColor;
		this.boxCapacity = boxCapacity;
		this.materialThickness = materialThickness;
		this.closureType = closureType;
		this.prodImage = prodImage;
	}


	/**
	 * @return the compProdId
	 */
	public int getCompProdId() {
		return compProdId;
	}


	/**
	 * @param compProdId the compProdId to set
	 */
	public void setCompProdId(int compProdId) {
		this.compProdId = compProdId;
	}


	/**
	 * @return the product
	 */
	public Product getProduct() {
		return product;
	}


	/**
	 * @param product the product to set
	 */
	public void setProduct(Product product) {
		this.product = product;
	}


	/**
	 * @return the company
	 */
	public Company getCompany() {
		return company;
	}


	/**
	 * @param company the company to set
	 */
	public void setCompany(Company company) {
		this.company = company;
	}


	/**
	 * @return the prodWeight
	 */
	public Float getProdWeight() {
		return prodWeight;
	}


	/**
	 * @param prodWeight the prodWeight to set
	 */
	public void setProdWeight(Float prodWeight) {
		this.prodWeight = prodWeight;
	}


	/**
	 * @return the prodSize
	 */
	public String getProdSize() {
		return prodSize;
	}


	/**
	 * @param prodSize the prodSize to set
	 */
	public void setProdSize(String prodSize) {
		this.prodSize = prodSize;
	}


	/**
	 * @return the materialType
	 */
	public String getMaterialType() {
		return materialType;
	}


	/**
	 * @param materialType the materialType to set
	 */
	public void setMaterialType(String materialType) {
		this.materialType = materialType;
	}


	/**
	 * @return the prodDescription
	 */
	public String getProdDescription() {
		return prodDescription;
	}


	/**
	 * @param prodDescription the prodDescription to set
	 */
	public void setProdDescription(String prodDescription) {
		this.prodDescription = prodDescription;
	}


	/**
	 * @return the stock
	 */
	public Integer getStock() {
		return stock;
	}


	/**
	 * @param value the stock to set
	 */
	public void setStock(Integer value) {
		this.stock = value;
	}


	/**
	 * @return the prodPrice
	 */
	public Double getProdPrice() {
		return prodPrice;
	}


	/**
	 * @param prodPrice the prodPrice to set
	 */
	public void setProdPrice(Double prodPrice) {
		this.prodPrice = prodPrice;
	}


	/**
	 * @return the prodShape
	 */
	public String getProdShape() {
		return prodShape;
	}


	/**
	 * @param prodShape the prodShape to set
	 */
	public void setProdShape(String prodShape) {
		this.prodShape = prodShape;
	}


	/**
	 * @return the prodDesignType
	 */
	public String getProdDesignType() {
		return prodDesignType;
	}


	/**
	 * @param prodDesignType the prodDesignType to set
	 */
	public void setProdDesignType(String prodDesignType) {
		this.prodDesignType = prodDesignType;
	}


	/**
	 * @return the prodColor
	 */
	public String getProdColor() {
		return prodColor;
	}


	/**
	 * @param prodColor the prodColor to set
	 */
	public void setProdColor(String prodColor) {
		this.prodColor = prodColor;
	}


	/**
	 * @return the boxCapacity
	 */
	public Integer getBoxCapacity() {
		return boxCapacity;
	}


	/**
	 * @param boxCapacity the boxCapacity to set
	 */
	public void setBoxCapacity(Integer boxCapacity) {
		this.boxCapacity = boxCapacity;
	}


	/**
	 * @return the materialThickness
	 */
	public Integer getMaterialThickness() {
		return materialThickness;
	}


	/**
	 * @param value the materialThickness to set
	 */
	public void setMaterialThickness(Integer value) {
		this.materialThickness = value;
	}


	/**
	 * @return the closureType
	 */
	public String getClosureType() {
		return closureType;
	}


	/**
	 * @param closureType the closureType to set
	 */
	public void setClosureType(String closureType) {
		this.closureType = closureType;
	}


	/**
	 * @return the prodImage
	 */
	public String getProdImage() {
		return prodImage;
	}


	/**
	 * @param prodImage the prodImage to set
	 */
	public void setProdImage(String prodImage) {
		this.prodImage = prodImage;
	}

  
}

