package com.inti.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.inti.model.Client;
import com.inti.model.Offre;
import com.inti.repository.IClientRepository;
import com.inti.repository.IOffreRepository;

@RestController
@RequestMapping("client")
public class ClientController {

	@Autowired
	IClientRepository icr;
	@Autowired
	IOffreRepository ior;

	//Consulter la liste des offres
	
	@GetMapping("consulterOffres")
	public List<Offre> listeOffres() 
	{
		return ior.findAll();
	}

		
	//Consulter les informations d'une offre selectionnée

	
	@GetMapping("consulterInfos/{id}")
	public Offre getoffre(@PathVariable("id") int id)
	{
		try {
			System.out.println("Affichage des informations d'une offre selon son id");
			return ior.findById(id).get();
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("Affichage des informations d'une offre : " + id + "erreur sur l'id");
		return null;
	}

	
	//Recherche avancée selon plusieurs critères : voir Angular
	//Faire un bouton 'details'qui affiche offres selon un critere donnee 
	
	//A rediger
//	    private String type_bien;
//	    private String adresse;
//	    private String ville;
//	    private double prix;
//	    private double surface;
//	    private int nb_piece;
//	    private boolean meuble;
//	    private boolean achat;
//	    private boolean exterieur;
//	    private String croquis;
//	    private String note;
	
	
	
	
	//CRUD client (inscription, liste, suppression) -> voir gerant
	
	@GetMapping("listeClients")
	public List<Client> listeClients()
	{
		return icr.findAll();
	}
	
	@PostMapping("saveClient")
	public Client saveClient(@RequestBody Client c)
	{
		return icr.save(c);
	}
	
	@DeleteMapping("supprimerClient/{id}")
	public void supprimerClient(@PathVariable("id") int id)
	{
		icr.deleteById(id);	
	}
	
	@PutMapping("modifierClient/{id}")
	public Client modifierClient(@RequestBody Client c)
	{
		return icr.save(c);
	}
	
	

}
