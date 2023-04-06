package com.inti.model;
import java.util.*;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name="g1_gerant_attente")
@Entity 
@JsonIgnoreProperties({"hibernateLazyInitializer"})
@PrimaryKeyJoinColumn(name="id_gerant")
public class GerantAttente extends Personne {

	
	@OneToMany(mappedBy = "gerant")
    private List<Questions> listeQuestions;

    public GerantAttente() {
		super();
	}
	public GerantAttente(int id, String nom, String prenom, String login, String mdp, String mail) {
		super(id, nom, prenom, login, mdp, mail);
	}

}