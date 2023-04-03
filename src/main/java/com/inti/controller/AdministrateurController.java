package com.inti.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.inti.model.AdminAttente;
import com.inti.model.Administrateur;
import com.inti.model.Client;
import com.inti.model.ClientAttente;
import com.inti.model.Gerant;
import com.inti.model.GerantAttente;
import com.inti.repository.IAdminAttenteRepository;
import com.inti.repository.IAdministrateurRepository;
import com.inti.repository.IClientAttenteRepository;
import com.inti.repository.IClientRepository;
import com.inti.repository.IGerantAttenteRepository;
import com.inti.repository.IGerantRepository;

@RestController
@RequestMapping("admin")
public class AdministrateurController {

	@Autowired
	IAdministrateurRepository iar;
	
	@Autowired
	IAdminAttenteRepository iaar;
	
	@Autowired
	IClientRepository icr;
	
	@Autowired
	IClientAttenteRepository icar;
	
	@Autowired
	IGerantRepository igr; 
	
	@Autowired
	IGerantAttenteRepository igar; 
	
	//Ajouter client
	@PostMapping("ajouterClient")
	public ClientAttente inscriptionClient(@RequestBody ClientAttente c)
	{
		
		return icar.save(c);
	}
	
	@GetMapping("getClients")
	public List<ClientAttente> getClientsAttente()
	{
		return icar.findAll();
	}
	
	@DeleteMapping("valider/{id}")
	public void validerClientAttente(@RequestBody Client c, @PathVariable int id)
	{
		icr.save(c);
		icar.deleteById(id);
	}
	
	
	//Ajouter admin
	@PostMapping("ajouterAdmin")
	public AdminAttente inscriptionAdmin(@RequestBody AdminAttente a)
	{
		
		return iaar.save(a);
	}
	
	@GetMapping("getGerants")
	public List<AdminAttente> getAdminsAttente()
	{
		return iaar.findAll();
	}
	
	@DeleteMapping("valider/{id}")
	public void validerAdminAttente(@RequestBody Administrateur a, @PathVariable int id)
	{
		iar.save(a);
		iaar.deleteById(id);
	}
	
	//Ajouter gerant
	@PostMapping("ajouterGerant")
	public GerantAttente inscriptionGerant(@RequestBody GerantAttente g)
	{
			
		return igar.save(g);
	}
		
	@GetMapping("getGerants")
	public List<GerantAttente> getGerantsAttente()
	{
		return igar.findAll();
	}
		
	@DeleteMapping("valider/{id}")
	public void validerGerantAttente(@RequestBody Gerant g, @PathVariable int id)
	{
		igr.save(g);
		igar.deleteById(id);
	}
}
