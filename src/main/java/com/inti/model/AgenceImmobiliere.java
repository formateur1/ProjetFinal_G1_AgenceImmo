package com.inti.model;

import java.util.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString.Exclude;

@Table(name = "g1_agence_immobiliere")
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@JsonIgnoreProperties({ "hibernateLazyInitializer" })
public class AgenceImmobiliere {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String nom;
	private String adresse;

	@OneToMany(mappedBy = "agence_immobiliere")
	@Exclude
	@JsonIgnore
	private List<Personne> listePersonne;

	@OneToMany(mappedBy = "agence_immobiliere")
	@Exclude
	@JsonIgnore
	private List<Offre> listeOffre;

}