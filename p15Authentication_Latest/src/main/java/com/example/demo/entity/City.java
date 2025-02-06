package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="city")
public class City {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
int city_id;
String city_name;


@ManyToOne
@JoinColumn(name="state_id")
State state_id;


public int getCity_id() {
	return city_id;
}


public void setCity_id(int city_id) {
	this.city_id = city_id;
}


public String getCity_name() {
	return city_name;
}


public void setCity_name(String city_name) {
	this.city_name = city_name;
}


public State getState_id() {
	return state_id;
}


public void setState_id(State state_id) {
	this.state_id = state_id;
}


public City(int city_id, String city_name, State state_id) {
	super();
	this.city_id = city_id;
	this.city_name = city_name;
	this.state_id = state_id;
}


public City() {
	super();
	// TODO Auto-generated constructor stub
}


}
