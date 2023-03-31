package com.inti.model;
import java.time.LocalDate;
import java.util.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Table(name="g1_questions")
@Entity @AllArgsConstructor @NoArgsConstructor @Data
@JsonIgnoreProperties({"hibernateLazyInitializer"})
public class Questions {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String contenu;
    private LocalDate date;
    private String reponse;
    private boolean traitement;


@ManyToOne
@JoinColumn(name = "gerant")
private Gerant gerant;

@ManyToOne
@JoinColumn(name = "client")
private Client client;
}
