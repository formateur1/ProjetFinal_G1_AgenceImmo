package com.inti.model;
import java.util.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name="g1_offre")
@Entity @AllArgsConstructor @NoArgsConstructor @Data
@JsonIgnoreProperties({"hibernateLazyInitializer"})
public class Offre {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String type_bien;
    private String adresse;
    private String ville;
    private double prix;
    private double surface;
    private int nb_piece;
    private boolean meuble;
    private boolean achat;
    private boolean exterieur;
    private String croquis;
    private String note;

    @ManyToMany(mappedBy = "listePropositionOffre")
    private List<Gerant> listeGerantOffre;
    

public Offre(String type_bien, String adresse, String ville, double prix, double surface, int nb_piece,
			boolean meuble, boolean achat, boolean exterieur, String croquis) {
		super();
		this.type_bien = type_bien;
		this.adresse = adresse;
		this.ville = ville;
		this.prix = prix;
		this.surface = surface;
		this.nb_piece = nb_piece;
		this.meuble = meuble;
		this.achat = achat;
		this.exterieur = exterieur;
		this.croquis = croquis;
	}



@ManyToOne
@JoinColumn(name = "id_agence_immmobiliere")
private AgenceImmobiliere agence_immobiliere;
}


