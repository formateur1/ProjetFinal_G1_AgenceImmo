package com.inti.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString.Exclude;


@Table(name = "g1_questions")
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@JsonIgnoreProperties({"hibernateLazyInitializer"})
public class Questions {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String contenu;
	private LocalDate date;
	private String reponse;
	private boolean traitement;
	private int idG;
	private int idC;

	@ManyToOne
	@JoinColumn(name = "gerant")
	@Exclude
	@JsonIgnore
	private Gerant gerant;

	@ManyToOne
	@JoinColumn(name = "client")
	@Exclude
	@JsonIgnore
	private Client client;

	public Questions(String contenu, Gerant gerant, Client client) {
		super();
		this.contenu = contenu;
		this.gerant = gerant;
		this.client = client;
	}

	public Questions(String contenu, int idG, int idC) {
		super();
		this.contenu = contenu;
		this.idG = idG;
		this.idC = idC;
	}

}
