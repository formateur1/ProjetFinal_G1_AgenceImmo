import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/model/client.model';

import { OffreComponentComponent } from '../offre-client/offre-component.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offre } from 'src/app/model/offre.model';
import { OffreGerantComponent } from '../offre-gerant/offre-gerant.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gerant-component',
  templateUrl: './gerant-component.component.html',
  styleUrls: ['./gerant-component.component.css']
})
export class GerantComponentComponent implements OnInit{
  //private http!:HttpClient;
  private ocg!:OffreGerantComponent;

  constructor(private router:Router,private http: HttpClient){}
  
 ngOnInit(): void {
  
  }

  // A FAIRE...

  // - menu dans html gerant

  // - crud offre
  //* Nouvelle offre 
  ajoutOffre():void{
    this.router.navigate(['formOffre']);
  }
  //* Modifier/supprimé une offre 

  deleteOffre(id:number):Observable<void>
  {
    return this.http.delete<void>("http://localhost8080/gerant/deleteOffre"+id)
  }
  getOffreById(id:number):Observable<Offre>
  {
    return this.http.get<Offre>("http://localhost8080/gerant/getOffreById"+id)
  }
  modify(offre:Offre):Observable<void>
  {
    return this.http.put<void>("http://localhost8080/gerant/updateOffre", offre.id)
  }
  // - fonctions gérant
  //* Proposer offres
  //Choisir les offres a proposer au client et les ajouter a une liste
  afficherOffre() {
   this.router.navigate(["listeOffres"]);
};
// Choisir le client a qui proposer les offres de la liste
// supprimer une offre de la liste des propositions
//* CROQUIS...
}
