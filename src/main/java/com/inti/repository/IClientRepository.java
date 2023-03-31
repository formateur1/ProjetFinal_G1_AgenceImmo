package com.inti.repository;

<<<<<<< HEAD
public interface IClientRepository {
	
=======
import org.springframework.data.jpa.repository.JpaRepository;

import com.inti.model.Client;

public interface IClientRepository extends JpaRepository<Client, Integer>{
>>>>>>> branch 'master' of https://github.com/Mariambmb/ProjetFinal_G1.git

}
