package com.inti.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.inti.model.Gerant;
@Repository
public interface IGerantRepository extends JpaRepository<Gerant, Integer> {

}
