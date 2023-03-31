package com.inti.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.inti.model.Client;

public interface IClientRepository extends JpaRepository<Client, Integer>{

}
