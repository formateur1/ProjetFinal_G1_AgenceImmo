package com.inti.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.inti.model.Offre;
import com.inti.repository.IOffreRepository;

@RestController
public class OffreController {
	
	@Autowired
	IOffreRepository ior;
	
	public void ajouterNote(@PathVariable int offreId, @PathVariable double note)
	{
		Optional<Offre> ofr = ior.findById(offreId);
		Offre offre = ofr.get();
		offre.ajouterNote(note);
		ior.save(offre);
	}
	
	public double MoyenneNotes(@PathVariable int offreId)
	{
		Optional<Offre> ofr = ior.findById(offreId);
		Offre offre = ofr.get();
		double moyenneNote = offre.MoyenneNotes();
		return moyenneNote;
	}
	

}
