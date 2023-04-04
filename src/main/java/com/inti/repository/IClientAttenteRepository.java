package com.inti.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.inti.model.ClientAttente;

@Repository
public interface IClientAttenteRepository extends JpaRepository<ClientAttente, Integer>{

}
