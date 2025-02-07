package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entity.CompanyProduct;
import com.example.demo.repo.CompanyProductRepository;
import com.example.demo.service.CompanyProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;

import java.io.File;
import java.io.IOException;
import java.nio.file.*;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3015")
@RestController
@RequestMapping("/api")
public class CompanyProductController {

	@Autowired
	CompanyProductRepository companyProductRepo;
	
	@Autowired
	CompanyProductService companyProductService;
	
    @Value("${upload.path}") // Path defined in application.properties
    private String uploadDir;

    // ✅ Upload Image & Return Path
 // ✅ Upload Image & Store Outside the Project
    @PostMapping("/uploadImage")
    public ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("File is empty");
        }

        try {
            // Ensure directory exists
            File directory = new File(uploadDir);
            if (!directory.exists()) {
                directory.mkdirs();
            }

            // Save image with unique filename
            String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
            Path filePath = Paths.get(uploadDir, fileName); // Use Paths.get for OS compatibility
            Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

            // ✅ Return accessible image path
            String imageUrl = "http://localhost:8082/AssetImage/" + fileName;
            return ResponseEntity.ok(imageUrl);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error uploading file");
        }
    }



    // ✅ Save Product with Image Path
    @PostMapping("/saveCompanyProducts")
    public CompanyProduct saveCompanyProduct(@RequestBody CompanyProduct companyProduct) {
    	
        return companyProductService.saveCompanyProduct(companyProduct) ;
    }

    @GetMapping("/getCompanyProducts")
    public List<CompanyProduct> getAllComProd(){
    	return companyProductService.getAllCompanyProducts();
    }
    
    @GetMapping("/getCompanyWiseProducts")
    public List<CompanyProduct> getCompanyWiseProduct(@RequestParam int companyId){
    	return companyProductRepo.findByCompany_CompanyId(companyId);
    }
    
    @GetMapping("/getCompanyProduct/{comp_prod_id}")
    public CompanyProduct getCompanyProduct(@PathVariable int comp_prod_id ){
    	return companyProductRepo.findById(comp_prod_id).orElse(null);
    }

//    @PatchMapping("/updateCompanyProduct/{compProdId}")
//    public String updateCompanyProduct(@PathVariable int compProdId, @RequestBody Map<String, Object> updates) {
//    	System.out.println("In Update Product ");
//        return companyProductService.updateCompanyProduct(compProdId, updates);
//    }
    
    @PatchMapping("/updateCompanyProduct/{compProdId}")
    public String updateCompanyProduct(@PathVariable int compProdId, 
                                       @RequestBody Map<String, Object> updates) {
        try {
            return companyProductService.updateCompanyProduct(compProdId, updates);
        } catch (Exception e) {
            return "Error updating product: " + e.getMessage();
        }
    }

    
    @DeleteMapping("/deleteCompanyProduct/{compProdId}")
    public String deleteCompanyProduct(@PathVariable int compProdId) {
        if (companyProductRepo.existsById(compProdId)) {
            companyProductRepo.deleteById(compProdId);
            return "CompanyProduct deleted successfully.";
        } else {
            return "CompanyProduct not found.";
        }
    }


    
    

}
