package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.CompanyProduct;

import jakarta.transaction.Transactional;

@Transactional
@Repository
public interface CompProdRepository extends JpaRepository<CompanyProduct, Integer> {

	@Modifying
	@Query("update CompanyProduct c set c.prod_image= ?2 where c.comp_prod_id = ?1")
	public int uploadPhoto(int id, byte [] file);
}
