package com.inti.controller;

import java.util.ArrayList;
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
@CrossOrigin(origins = { "http://localhost:4200", "http://localhost:4201" })
public class ClientController {

	@Autowired
	IClientRepository icr;
	@Autowired
	IOffreRepository ior;
	@Autowired
	IGerantRepository igr;

	// CRUD client (inscription, liste, suppression) -> voir gerant

//	@GetMapping("listeClients")
//	public List<Client> listeClients() {
//		return icr.findAll();
//	}

//	@DeleteMapping("supprimerClient/{id}")
//	public void supprimerClient(@PathVariable("id") int id) {
//		icr.deleteById(id);
//	}

	@PostMapping("saveClient")
	public Client saveClient(@RequestBody Client c) {
		Client c3 = new Client();	
		try {
			c3=icr.save(c);
		}catch (Exception e) {
			System.out.println("Echec de la sauvegarde");
			e.printStackTrace();
		}
		return c3;
	}

	@PutMapping("modifierClient/{id}")
	public Client modifierClient(@RequestBody Client c) {
	Client c4 = new Client();		
		try {
			c4=icr.save(c);
		}catch (Exception e) {
			System.out.println("Echec modification");
			e.printStackTrace();
		}
		return c4;
	}

	// Consulter la liste des offres

	@GetMapping("consulterOffres")
	public List<Offre> listeOffres() {
		List<Offre> listeOffres = new ArrayList<>();
		
		try {
			listeOffres=ior.findAll();
			
		}catch (Exception e) {
			System.out.println("Echec de la récupération des offres");
			e.printStackTrace();
		}
		return listeOffres;
		 
	}
	// Consulter les informations d'une offre selectionnée

	@GetMapping("consulterInfos/{id}")
	public Offre getoffre(@PathVariable("id") int id) {
		Offre o = new Offre();
		try {
			System.out.println("Affichage des informations d'une offre selon son id");
			o = ior.findById(id).get();
		} catch (Exception e) {
			System.out.println("Echec récupération de l'offre");
			e.printStackTrace();
		}
		return o;
	}

	// Propositions d'offres

	@GetMapping("listePropositionsClient/{idClient}")
	public List<Offre> listePropositionsClient(@PathVariable ("idClient") int idClient) {
		List<Offre> listePropositionsClient = new ArrayList<>();
		try {
			listePropositionsClient = icr.getReferenceById(idClient).getListePropositions();
		} catch (Exception e) {
			System.out.println("Echec récupération de la liste d'offres");
			e.printStackTrace();
		}
		return listePropositionsClient;
	}
	
	@PutMapping("recevoirProposition/{idOffre}/{idClient}")
	public Client recevoirProposition(@PathVariable("idOffre") int idOffre, @PathVariable ("idClient") int idClient) {
		Client c = new Client();
		try {
			Offre o = ior.getReferenceById(idOffre);
			 c = icr.getReferenceById(idClient);
			
			System.out.println("Récupération du client " + c.getId() + "pour recevoir l'offre " + o.getId());
			System.out.println("taille de la liste avant ajout : " + c.getListePropositions().size());
			c.getListePropositions().add(o);
			icr.save(c);
			System.out.println("taille de la liste après ajout : " + c.getListePropositions().size());
		} catch (Exception e) {
			System.out.println("Echec de l'envoie de la proposition");
			e.printStackTrace();
		}
		return c;
	}

	@PutMapping("recevoirListePropositions/{idClient}/{idGerant}")
	public Client recevoirListePropositions(@PathVariable ("idClient") int idClient, @PathVariable ("idGerant") int idGerant) { 
		Client c = new Client();
		try {
			 c = icr.getReferenceById(idClient);
			Gerant g = igr.getReferenceById(idGerant);
			
			System.out.println("Récupération du client " + c.getId() + "pour recevoir la liste du gérant " + g.getId());
			System.out.println("taille de la liste avant ajout : " + c.getListePropositions().size());
			c.getListePropositions().addAll(g.getListePropositionOffre());
			icr.save(c);
			System.out.println("taille de la liste après ajout : " + c.getListePropositions().size());
		} catch (Exception e) {
			System.out.println("Echec de l'envoie de la liste de propositions");
			e.printStackTrace();
		}
		return c;
	}
	// Gerer sa selection d'offres

	@PutMapping("retirerProposition/{idOffre}/{idClient}")
	public void retirerProposition(@PathVariable ("idOffre")int idOffre, @PathVariable ("idClient") int idClient) {
		try {
			Client c = icr.getReferenceById(idClient);
			
			System.out.println("taille de la liste avant retrait : " + c.getListePropositions().size());
			c.getListePropositions().remove(ior.getReferenceById(idOffre));
			icr.save(c);
			System.out.println("taille de la liste après retrait : " + c.getListePropositions().size());
		} catch (Exception e) {
			System.out.println("Echec du retrait de la proposition");
			e.printStackTrace();
		}
	}

	@PutMapping("sauvegarderOffre/{idOffre}/{idClient}")
	public Client sauvegarderOffre(@PathVariable ("idOffre")int idOffre, @PathVariable ("idClient") int idClient) {
		Client c = new Client();
		try {
			 c = icr.getReferenceById(idClient);
			Offre o = ior.getReferenceById(idOffre);

			System.out.println("Récupération du client " + c.getId() + "pour l'offre " + o.getId());
			System.out.println("taille de la liste avant ajout : " + c.getListePropositions().size());
			c.getListePropositions().add(o);
			System.out.println("taille de la liste après ajout : " + c.getListePropositions().size());

			icr.save(c);
		} catch (Exception e) {
			System.out.println("Echec de l'ajout de l'offre");
			e.printStackTrace();
		}
		return c;

	}

}