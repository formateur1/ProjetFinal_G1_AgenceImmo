import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/model/client.model';

import { OffreComponentComponent } from '../offre-client/offre-component.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offre } from 'src/app/model/offre.model';
import { OffreGerantComponent } from '../offre-gerant/offre-gerant.component';
import { Router } from '@angular/router';
import { OffreService } from 'src/app/service/offre.service';

@Component({
  selector: 'app-gerant-component',
  templateUrl: './gerant-component.component.html',
  styleUrls: ['./gerant-component.component.css']
})
export class GerantComponentComponent implements OnInit{
  //private http!:HttpClient;
  private ocg!:OffreGerantComponent;
  private idOffre!:number;
  constructor(private router:Router,private http: HttpClient, private os:OffreService){}
  
 ngOnInit(): void {
  
  }
// - crud offre : bouton dans la liste offre-Gerant
//* Nouvelle offre 
ajoutOffre():void{
    this.router.navigate(['formOffre']);
  }

  // A FAIRE...

  // - menu dans html gerant
  
  //Retrouver une offre

  getOffreById()
  {
    
    return this.router.navigate(['offreById/'+this.idOffre]);
  }

  // - fonctions gérant
  //* Proposer offres
  //Choisir les offres a proposer au client et les ajouter a une liste
  afficherListeOffres() {
   this.router.navigate(["listeOffres"]);
};
// Choisir le client a qui proposer les offres de la liste
// supprimer une offre de la liste des propositions
//* CROQUIS...
}
