package com.inti.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.inti.model.Client;
import com.inti.model.Gerant;
import com.inti.model.Offre;
import com.inti.repository.IClientRepository;
import com.inti.repository.IGerantRepository;
import com.inti.repository.IOffreRepository;

@RestController
@RequestMapping("gerant")
@CrossOrigin(origins = { "http://localhost:4200", "http://localhost:4201" })
public class GerantController {
	@Autowired
	IClientRepository icr;
	@Autowired
	IOffreRepository ior;
	@Autowired
	IGerantRepository igr;

	@GetMapping("listeClients")
	public List<Client> listeClients() {
		List<Client> listeClients = new ArrayList<>();
		try {
			listeClients = icr.findAll();
		} catch (Exception e) {
			System.out.println("Echec de la récupération de la liste");
			e.printStackTrace();
		}
		return listeClients;
	}

	@GetMapping("clientId/{id}")
	public Client clientId(@PathVariable("id") int id) {
		Client c = new Client();	
		try {
			c = icr.getReferenceById(id);
			System.out.println("id du client : " + id);
		} catch (Exception e) {
			System.out.println("Echec de la récupération du client");
			e.printStackTrace();
		}
		return c;
	}

	@GetMapping("listeOffres")
	public List<Offre> listeOffres() {
		List<Offre> listeOffres = new ArrayList<>();
		try {
			listeOffres = ior.findAll();
		} catch (Exception e) {
			System.out.println("Echec de la récupération de la liste");
			e.printStackTrace();
		}
		return listeOffres;
	}

	@GetMapping("offreId/{id}")
	public Offre offreId(@PathVariable("id") int id) {
		Offre o = new Offre();
		try {
			o = ior.getReferenceById(id);
			System.out.println("Offre " + id);
		} catch (Exception e) {
			System.out.println("Erreur récupération de l'offre.");
			e.printStackTrace();
		}
		return o;
	}

	@PostMapping("saveOffre")
	public Offre saveOffre(@RequestBody Offre o) {
		Offre o1 = new Offre();
		try {
			o1 = ior.save(o);
		} catch (Exception e) {
			System.out.println("Echec de l'enregistrement");
			e.printStackTrace();
		}
		return o1;
	}

	@DeleteMapping("deleteOffre/{id}")
	public void deleteOffre(@PathVariable("id") int id) {
		try {
			ior.deleteById(id);
		} catch (Exception e) {
			System.out.println("Echec de la suppression");
			e.printStackTrace();
		}
	}

	@PutMapping("updateOffre")
	public void updateOffre(@RequestBody Offre o) {
		try {
			ior.save(o);
		} catch (Exception e) {
			System.out.println("Echec de l'enregistrement");
			e.printStackTrace();
		}
	}

	@GetMapping("listePropositions/{idGerant}")
	public List<Offre> listePropositions(@PathVariable int idGerant) {
		List<Offre> listePropositions = new ArrayList<>();
		try {
			listePropositions = igr.getReferenceById(idGerant).getListePropositionOffre();
		} catch (Exception e) {
			System.out.println("Echec de la récupération de la liste");
			e.printStackTrace();
		}
		return listePropositions;
	}

	@PutMapping("ajoutPropOffre/{idOffre}/{idGerant}")
	public Offre ajoutPropositionOffre(@PathVariable("idOffre") int idOffre, @PathVariable("idGerant") int idGerant) {
		Offre o = new Offre();
		try {
			
			Gerant g = igr.getReferenceById(idGerant);
			o = ior.getReferenceById(idOffre);
			System.out.println("Récupération du gérant " + g.getId() + "pour l'offre " + o.getId());
			System.out.println("taille de la liste avant ajout : " + g.getListePropositionOffre().size());
			g.getListePropositionOffre().add(o);
			igr.save(g);
			System.out.println("taille de la liste après ajout : " + g.getListePropositionOffre().size());

		} catch (Exception e) {
			System.out.println("Echec de la récupération de l'offre" + idOffre + " ou du gérant " + idGerant);
			e.printStackTrace();
		}
		return o;
	}

	@PutMapping("deletePropOffre/{idOffre}/{idGerant}")
	public Gerant deletePropOffre(@PathVariable ("idOffre") int idOffre, @PathVariable ("idGerant") int idGerant) {
		Gerant g = new Gerant();
		try {
			g = igr.getReferenceById(idGerant);
			System.out.println("taille de la liste avant retrait : " + g.getListePropositionOffre().size());
			g.getListePropositionOffre().remove(ior.getReferenceById(idOffre));
			igr.save(g);
			System.out.println("taille de la liste après retrait : " + g.getListePropositionOffre().size());
		} catch (Exception e) {
			System.out.println("Echec de la récupération du gérant " + idGerant);
			e.printStackTrace();
		}
		return g;
	}

	// Gestion gérant (admin)
	@PostMapping("ajouterGerant")
	public Gerant inscriptionGerant(@RequestBody Gerant g) {
		Gerant g1 = new Gerant();
		try {
			g1 = igr.save(g1);
		} catch (Exception e) {
			System.out.println("Echec de l'enregistrement");
			e.printStackTrace();
		}
		return g1;
	}

	@GetMapping("getGerants")
	public List<Gerant> getGerants() {
		List<Gerant> getGerants = new ArrayList<>();
		try {
			getGerants = igr.findAll();
		} catch (Exception e) {
			System.out.println("Echec de la récupération de la liste");
			e.printStackTrace();
		}
		return getGerants;
	}
}
