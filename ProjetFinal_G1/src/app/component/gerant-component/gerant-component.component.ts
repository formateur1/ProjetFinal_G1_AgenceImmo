import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OffreGerantComponent } from '../offre-gerant/offre-gerant.component';
import { Router } from '@angular/router';
import { OffreService } from 'src/app/service/offre.service';

@Component({
  selector: 'app-gerant-component',
  templateUrl: './gerant-component.component.html',
  styleUrls: ['./gerant-component.component.css']
})
export class GerantComponentComponent implements OnInit {
  ocg!: OffreGerantComponent;
  idOffre: any="";

  constructor(private router: Router, private http: HttpClient, private os: OffreService) { }

  ngOnInit(): void {

  }
  // - crud offre : bouton dans la liste offre-Gerant

  //* Nouvelle offre 
  ajoutOffre(): void {
    this.router.navigate(['formOffre']);
  }

  // A FAIRE...

  // - menu dans html gerant + inputid pour la recherche ne marche pas

  //Retrouver une offre

  getOffreById() {
    console.log(this.idOffre);
    return this.router.navigate(['offreById/' + this.idOffre]);
  }

  // - fonctions gérant
  //* Proposer offres
  //Choisir les offres a proposer au client et les ajouter a une liste
  afficherListeOffres(): void {
    this.router.navigate(["listeOffresGerant"]);
  };
  // Choisir le client a qui proposer les offres de la liste
  // supprimer une offre de la liste des propositions
  //* CROQUIS...
}
