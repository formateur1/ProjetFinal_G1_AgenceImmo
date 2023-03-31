package com.inti.model;
import java.util.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.OneToMany;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name="g1_gerant")
@Entity 
@JsonIgnoreProperties({"hibernateLazyInitializer"})
@PrimaryKeyJoinColumn(name="id_gerant")
public class Gerant extends Personne {

	
	@OneToMany(mappedBy = "gerant")
    private List<Questions> listeQuestions;

    public Gerant() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Gerant(int id, String nom, String prenom, String login, String mdp, String mail) {
		super(id, nom, prenom, login, mdp, mail);
		// TODO Auto-generated constructor stub
	}
	public void propOffres() {
        // TODO implement here
    }
    public void propCroquis() {
        // TODO implement here
    }

    public void repClients() {
        // TODO implement here
    }

}