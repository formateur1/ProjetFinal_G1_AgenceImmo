package com.inti.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.inti.model.Gerant;

public interface IGerantRepository extends JpaRepository<Gerant, Integer> {

}
