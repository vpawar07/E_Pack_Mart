package com.example.demo.service;

import com.example.demo.controller.CompanyProductController;
import com.example.demo.entity.CompanyProduct;
import com.example.demo.repo.CompanyProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class CompanyProductService {

    @Autowired
    private CompanyProductRepository companyProductRepository;

    public CompanyProduct saveCompanyProduct(CompanyProduct companyProduct) {
        return companyProductRepository.save(companyProduct);
    }

    public List<CompanyProduct> getAllCompanyProducts() {
        return companyProductRepository.findAll();
    }
    
 //////////////////////////
    public String updateCompanyProduct(int compProdId, Map<String, Object> updates) {
        Optional<CompanyProduct> optionalProduct = companyProductRepository.findById(compProdId);

        if (optionalProduct.isPresent()) {
            CompanyProduct product = optionalProduct.get();

            for (Map.Entry<String, Object> entry : updates.entrySet()) {
                String key = entry.getKey();
                Object value = entry.getValue();

                switch (key) {
                    case "prodWeight":
                        product.setProdWeight((value != null) ? Float.parseFloat(value.toString()) : null);
                        break;
                    case "prodSize":
                        product.setProdSize((String) value);
                        break;
                    case "materialType":
                        product.setMaterialType((String) value);
                        break;
                    case "prodDescription":
                        product.setProdDescription((String) value);
                        break;
                    case "stock":
                        product.setStock((value != null) ? Integer.parseInt(value.toString()) : null);
                        break;
                    case "prodPrice":
                        product.setProdPrice((value != null) ? Double.parseDouble(value.toString()) : null);
                        break;
                    case "prodShape":
                        product.setProdShape((String) value);
                        break;
                    case "prodDesignType":
                        product.setProdDesignType((String) value);
                        break;
                    case "prodColor":
                        product.setProdColor((String) value);
                        break;
                    case "boxCapacity":
                        product.setBoxCapacity((value != null) ? Integer.parseInt(value.toString()) : null);
                        break;
                    case "materialThickness":
                        product.setMaterialThickness((value != null) ? Integer.parseInt(value.toString()) : null);
                        break;
                    case "closureType":
                        product.setClosureType((String) value);
                        break;
                    case "prodImage":  
                        // Handling Image Path  
                        if (value != null && !value.toString().isEmpty()) {  
                            product.setProdImage((String) value);  
                        } else if (product.getProdImage() == null) {  
                            product.setProdImage(null);  
                        }  
                        break;
                    default:
                        return "Invalid field: " + key;
                }
            }

            companyProductRepository.save(product);
            return "Product updated successfully!";
        } else {
            return "Product not found!";
        }
    }

//////////////////////////////////
    
    
   
}
