package com.inti.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.inti.model.Client;
import com.inti.model.Offre;
import com.inti.repository.IClientRepository;
import com.inti.repository.IOffreRepository;

@RestController
@RequestMapping("gerant")
public class GerantController {
	@Autowired
	IClientRepository icr;
	@Autowired
	IOffreRepository ior;

	@GetMapping("listeClients")
	public List<Client> listeClients() {
		List<Client> listeClients = icr.findAll();
		return listeClients;
	}

	@GetMapping("clientId/{id}")
	public Client clientId(@PathVariable("id") int id) {
		System.out.println("id : " + id);
		return icr.getReferenceById(id);
	}
	@GetMapping("listeOffres")
	public List<Offre> listeOffres() {
		List<Offre> listeOffres = ior.findAll();
		return listeOffres;
	}

	@GetMapping("offreId/{id}")
	public Offre offreId(@PathVariable("id") int id) {
		System.out.println("id : " + id);
		return ior.getReferenceById(id);
	}
	
}
