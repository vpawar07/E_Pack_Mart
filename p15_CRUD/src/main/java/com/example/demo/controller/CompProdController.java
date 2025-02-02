package com.example.demo.controller;

import java.io.File;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entity.CompProdHelper;
import com.example.demo.entity.CompanyProduct;
import com.example.demo.service.CompProdService;
import com.example.demo.service.CompanyService;

@CrossOrigin(origins = "http://localhost:3015")
@RestController
public class CompProdController {

	@Autowired
	CompProdService cpserv;

	@GetMapping("/getAllCompProd")
	public List<CompanyProduct> getAllCompProd() {
		return cpserv.getAllCompProd();
	}
	
	@PostMapping("/insertProduct")
	public CompanyProduct saveCompProd(@RequestBody CompanyProduct cp) {
		System.out.println("Ok");
//        CompanyProduct product = new CompanyProduct();
//        product.setCompany_id(cp.getCompany_id());
//        product.setProduct_id(cp.getProduct_id());
//        product.setMaterial_type(cp.getMaterial_type());
//        product.setProd_description(cp.getProd_description());
//        product.setProd_price(cp.getProd_price());
//        product.setProd_size(cp.getProd_size());
//        product.setProd_weight(cp.getProd_weight());
//        product.setStock(cp.getStock());
        //product.setImage_url(uploadDir + fileName);
        
        return cpserv.saveCompProd(cp);
	}
	
	@PostMapping(value = "/uploadImage/{cpid}", consumes = "multipart/form-data")
	public boolean uploadImage(@PathVariable("cpid") int cpid,@RequestBody MultipartFile productImage) throws IllegalStateException, IOException {
		boolean flag = true;
		try {
			flag = cpserv.uploadImage(cpid, productImage.getBytes());
		}
		catch(Exception e) {
			flag = false;
		}
		return flag;
	}
	
	
	@PutMapping("/updateCampProd/{cpid}")
	public void updateCampProd(@RequestBody CompanyProduct cp) {
		cpserv.updateCompProd(cp);
	}

	
}
