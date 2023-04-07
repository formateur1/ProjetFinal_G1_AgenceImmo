package com.inti.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;



import org.springframework.data.repository.query.Param;

import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.inti.model.Client;
import com.inti.model.Gerant;
import com.inti.model.Offre;
import com.inti.repository.IClientRepository;
import com.inti.repository.IGerantRepository;
import com.inti.repository.IOffreRepository;

@RestController
@RequestMapping("client")
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:4201"})
public class ClientController {

	@Autowired 
	IClientRepository icr;
	@Autowired
	IOffreRepository ior;
	@Autowired
	IGerantRepository igr; 

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
	
	/*Recherche avancée selon plusieurs critères : voir Angular
	 * Faire un bouton 'details'qui affiche offres selon un critere donnee */ 
	
	
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
	
	//Propositions d'offres
	@GetMapping("listePropositionsClient/{idClient}")
	public List<Offre> listePropositionsClient(@PathVariable int idClient) {
		return icr.getReferenceById(idClient).getListePropositions();
	}
	
	@PutMapping("recevoirProposition/{idOffre}/{idClient}")
	public void recevoirProposition(@PathVariable int idOffre, @PathVariable int idClient) {
		Client c = icr.getReferenceById(idClient);
		Offre o = ior.getReferenceById(idOffre);
		
		System.out.println("Récupération du client " + c.getId() + "pour recevoir l'offre " + o.getId());
		System.out.println("taille de la liste avant ajout : " + c.getListePropositions().size());

		c.getListePropositions().add(o);
		icr.save(c);

		System.out.println("taille de la liste après ajout : " + c.getListePropositions().size());
		System.out.println("liste proposition après ajout" + c.getListePropositions());
	}
		
	@PutMapping("recevoirListePropositions/{idGerant}/{idClient}")
	public void recevoirListePropositions( @PathVariable int idClient, @PathVariable int idGerant) {
		Client c = icr.getReferenceById(idClient);
		Gerant g = igr.getReferenceById(idGerant);
		System.out.println("Récupération du client " + c.getId() + "pour recevoir la liste du gérant " + g.getId());
		System.out.println("taille de la liste avant ajout : " + c.getListePropositions().size());
			
		c.getListePropositions().addAll( g.getListePropositionOffre());
		icr.save(c);

		System.out.println("taille de la liste après ajout : " + c.getListePropositions().size());
	}

	@DeleteMapping("retirerProposition/{idOffre}/{idClient}")
	public void retirerProposition(@PathVariable int idOffre, @PathVariable int idClient) {
		Client c = icr.getReferenceById(idClient);
		System.out.println("taille de la liste avant retrait : " + c.getListePropositions().size());
		c.getListePropositions().remove(ior.getReferenceById(idOffre));
		icr.save(c);
		System.out.println("taille de la liste après retrait : " + c.getListePropositions().size());
	}
	@PutMapping("sauvegarderOffre/{idOffre}/{idClient}")
	public void ajoutPropositionOffre(@PathVariable int idOffre, @PathVariable int idClient) {
		Client c = icr.getReferenceById(idClient);
		Offre o = ior.getReferenceById(idOffre);

		System.out.println("Récupération du client " + c.getId() + "pour l'offre " + o.getId());
		System.out.println("taille de la liste avant ajout : " + c.getListePropositions().size());

		c.getListePropositions().add(o);
		icr.save(c);

		System.out.println("taille de la liste après ajout : " + c.getListePropositions().size());
	}

}