package com.inti.model;

import java.util.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import org.hibernate.annotations.ManyToAny;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;
import lombok.ToString.Exclude;

@Table(name = "g1_gerant")
@Entity
@Data
@JsonIgnoreProperties({ "hibernateLazyInitializer" })
@PrimaryKeyJoinColumn(name = "id_gerant")
public class Gerant extends Personne {

	@Exclude
	@JsonIgnore
	@OneToMany(mappedBy = "gerant")
	private List<Questions> listeQuestions;

	@ManyToMany
	@JoinTable(name = "g1_gerant_propositionOffre", joinColumns = @JoinColumn(name = "gerant_id"), inverseJoinColumns = @JoinColumn(name = "offre_id"))
	private List<Offre> listePropositionOffre;

	public Gerant() {
		super();
	}

	public Gerant(int id, String nom, String prenom, String login, String mdp, String mail) {
		super(id, nom, prenom, login, mdp, mail);
	}
//	public Gerant(int id, String nom, String prenom, String login, String mdp, String mail, List<Offre>listePropositionOffre ) {
//		super(id, nom, prenom, login, mdp, mail);
//		this.listePropositionOffre = listePropositionOffre;}
	

	

	public void repClients() {
		// TODO implement here
	}


}