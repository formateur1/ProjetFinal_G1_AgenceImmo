package com.inti.model;

import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Table(name="g1_admin_attente")
@Entity 
@PrimaryKeyJoinColumn(name="id_admin")
public class AdminAttente extends Personne {


    public AdminAttente() {
		super();
		// TODO Auto-generated constructor stub
	}

	public AdminAttente(int id, String nom, String prenom, String login, String mdp, String mail) {
		super(id, nom, prenom, login, mdp, mail);
		// TODO Auto-generated constructor stub
	}

}