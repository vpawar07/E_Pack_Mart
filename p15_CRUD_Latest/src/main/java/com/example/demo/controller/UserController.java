package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.ComUser;
import com.example.demo.entity.Company;
import com.example.demo.entity.LoginEntity;
import com.example.demo.entity.User;
import com.example.demo.repo.CompanyRepo;
import com.example.demo.service.CompanyService;
import com.example.demo.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3015")
public class UserController {
	@Autowired
	UserService userSerObj;
	
	@Autowired
	CompanyService comService;
	@Autowired
	CompanyRepo comRepoRef;
	
	@GetMapping("/getAllUsers")
	public List<User> getAllUsers() {
		return userSerObj.getAllUser();
	}
	
	@PostMapping("/saveUser")
	public User save(@RequestBody User user) {
		
		return userSerObj.save(user);
	}
	@PostMapping("/saveCompany")
	public Company save(@RequestBody ComUser comuser) {
		User user=new User();
		user.setRole_id(comuser.getRole_id());
		user.setEmail(comuser.getEmail());
		user.setName(comuser.getName());
		user.setPassword(comuser.getPassword());
		user.setPancard(comuser.getPancard());
		user.setAddress(comuser.getAddress());
		user.setCity_id(comuser.getCity_id());
		
		Company com=new Company();
		com.setGst_no(comuser.getGst_no());
		com.setMsme_cert_no(comuser.getMsme_cert_no());
		com.setUser_id(user);
		userSerObj.save(user);
		return comRepoRef.save(com);
	}
	
//	@PostMapping("/login")
//	public User loginData(@RequestBody LoginEntity log) {
//	
//		return userSerObj.loginData(log);
//				
//	}
	@PostMapping("/login")
	public Object LoginData(@RequestBody LoginEntity log) {
	return 	userSerObj.loginData(log.getEmail(),log.getPassword());
	}
	
	
	
	
	@GetMapping("checkEmail")
	public ResponseEntity<Boolean> checkEmail(@RequestParam String email) {
		boolean isPresent=userSerObj.checkEmailId(email);
		return ResponseEntity.ok(isPresent);
	}
	
	@GetMapping("checkPancard")
	public ResponseEntity<Boolean> checkPancard(@RequestParam String pancard) {
		boolean isPresent=userSerObj.checkPancard(pancard);
		return ResponseEntity.ok(isPresent);
	}
//	@GetMapping("checkGST")
//	public ResponseEntity<Boolean>checkGST (@RequestParam String gst_no){
//		boolean isPresent=comService.checkGST(gst_no);
//		return ResponseEntity.ok(isPresent);
//	}
//	@GetMapping("checkMSME")
//	public ResponseEntity<Boolean>checkMSME (@RequestParam String msme_cert_no){
//		boolean isPresent=comService.checkMSME(msme_cert_no);
//		return ResponseEntity.ok(isPresent);
//	}
	
	
	
}
