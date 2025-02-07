package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Company;
import com.example.demo.entity.CompanyProduct;
import com.example.demo.entity.Product;

import jakarta.transaction.Transactional;

@Transactional
@Repository
public interface CompProdRepository extends JpaRepository<CompanyProduct, Integer> {

	@Modifying
	@Query(value = "UPDATE company_product SET prod_image = :file WHERE comp_prod_id = :id", nativeQuery = true)
	public int uploadPhoto(int id, byte [] file);
	
	
	@Modifying
	@Query("update CompanyProduct p set p.product_id= :product_id, p.company_id=:company_id, p.prod_weight=:prod_weight, p.prod_size=:prod_size, p.material_type=:material_type, p.prod_description=:prod_description, p.stock=:stock, p.prod_price=:prod_price, p.prod_shape=:prod_shape, p.prod_design_type=:prod_design_type, p.prod_color=:prod_color, p.box_capacity=:box_capacity, p.material_thickness=:material_thickness, p.closure_type=:closure_type where p.comp_prod_id=:comp_prod_id")
	public int updateProdComp(int comp_prod_id, Product product_id, Company company_id, Float prod_weight, String prod_size, String material_type, String prod_description, Integer stock, Double prod_price, String prod_shape, String prod_design_type, String prod_color, Integer box_capacity, String material_thickness, String closure_type);
	
	
	@Query(value = "select * from company_product where company_id=:compId", nativeQuery = true)
	public List<CompanyProduct> getCompProdByCompId(int compId);
	
	@Modifying
	@Transactional
	@Query(value = "delete from company_product where comp_prod_id=:compProdId", nativeQuery = true)
	public int deleteCompProd(int compProdId);
}
