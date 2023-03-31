package com.inti.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.inti.model.Client;
import com.inti.repository.IClientRepository;
import com.inti.repository.IOffreRepository;

@RestController
@RequestMapping("client")
public class ClientController {

	@Autowired
	IClientRepository icr;
	@Autowired
	IOffreRepository ior;

	
	@GetMapping("consulterOffres")
	public String getAllOffre(Model m)
	{
		m.addAttribute("consulter", ior.findAll());
		return"listeOffres";
	}
	
	@GetMapping("consulterInfos")
	public String getInfo(@RequestParam("id") int id, Model m)
	{
		m.addAttribute("info", ior.findAll());
		return"offreId";
	}
	
	//Recherche avancée selon plusieurs critères : voir Angular
	//Faire un bouton 'details'qui affiche offres selon un critere donnee 
	
	@GetMapping("inscriptionClients")
	public String inscription()
	{
		return "inscriptionClient";
	}
	
	@PostMapping("inscriptionClients")
	public String inscription(@ModelAttribute("client") Client c)
	{
		icr.save(c);
		
		return "redirect:/inscriptionClients";
	}
	
	@GetMapping("listeClients")
	public String listeClients(Model m)
	{
		m.addAttribute("listeC", icr.findAll());
		
		return "listeClients";
	}
	
	@GetMapping("deleteClients/{id}")
	public String deleteClients(@PathVariable("id") int id)
	{
		icr.deleteById(id);
		
		return "redirect:/listeClients";
	}

}
