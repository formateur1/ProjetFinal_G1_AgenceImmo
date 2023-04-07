package com.inti.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.inti.model.Note;
import com.inti.model.Offre;
import com.inti.repository.IOffreRepository;

@RestController
@RequestMapping("/offres")
public class OffreController {
	
	@Autowired
	IOffreRepository ior;
	
	@PostMapping("/{offreId}/ajouterNote/{note}")
	public void ajouterNote(@PathVariable int offreId, @PathVariable Note note)
	{
		Optional<Offre> ofr = ior.findById(offreId);
		Offre offre = ofr.get();
		offre.ajouterNote(note);
		ior.save(offre);
	}
	
	@GetMapping("/{offreId}/moyenneNotes")
	public double MoyenneNotes(@PathVariable int offreId)
	{
		Optional<Offre> ofr = ior.findById(offreId);
		Offre offre = ofr.get();
		double moyenneNote = offre.MoyenneNotes();
		return moyenneNote;
	}
	
	@GetMapping("nombreOffres")
	public long nombreOffres()
	{
		return ior.count();
	}

	
}
