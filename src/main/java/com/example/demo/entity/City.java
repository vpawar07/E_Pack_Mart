package com.example.demo.entity;
//Harry
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "city")
public class City {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int city_id;
	
	String city_name;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "state_id")
	State state_id;
}
