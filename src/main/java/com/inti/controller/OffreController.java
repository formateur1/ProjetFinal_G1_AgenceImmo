package com.inti.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.inti.model.Note;
import com.inti.model.Offre;
import com.inti.repository.IOffreRepository;

@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:4201"})
@RestController
@RequestMapping("/offres")
public class OffreController {
	
	@Autowired
	IOffreRepository ior;
	
	@PostMapping("/{offreId}/ajouterNote/{note}")
	public ResponseEntity<Void> ajouterNote(@PathVariable int offreId, @PathVariable double note) {
	    Optional<Offre> ofr = ior.findById(offreId);
	    if (ofr.isPresent()) {
	        Offre offre = ofr.get();
	        Note newNote = new Note(note);
	        offre.ajouterNote(newNote);
	        ior.save(offre);
	        System.out.println("Note ajoutée : " + newNote.getId() + ", valeur: " + newNote.getValeur());
	        return ResponseEntity.status(HttpStatus.OK).build();
	    } else {
	        System.out.println("Offre introuvable, id: " + offreId);
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	    }
	}
	
	@GetMapping("/{offreId}/moyenneNotes")
	public double MoyenneNotes(@PathVariable int offreId)
	{
		Optional<Offre> ofr = ior.findById(offreId);
		Offre offre = ofr.get();
		double moyenneNote = offre.MoyenneNotes();
		return moyenneNote;
	}
	

}
