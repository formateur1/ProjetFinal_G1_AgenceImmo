import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/model/client.model';
import { Router } from '@angular/router';
import { OffreComponentComponent } from '../offre-component/offre-component.component';

@Component({
  selector: 'app-gerant-component',
  templateUrl: './gerant-component.component.html',
  styleUrls: ['./gerant-component.component.css']
})
export class GerantComponentComponent implements OnInit{
  //private http!:HttpClient;
  private oc!:OffreComponentComponent;

  constructor(private router:Router){}
  
 ngOnInit(): void {
  // Gerant connecter : donne acces au bouton pour proposer une offre 
     this.oc.boutonGerant = false;
     this.oc.boutonClient = true;
  }

  // A FAIRE...

  // - menu dans html gerant

  // - crud offre
  //* Nouvelle offre 
  ajoutOffre():void{
    this.router.navigate(['./formulaire/formOffre']);
  }
  //* Modifier/supprimé une offre 

  // - fonctions gérant
  //* Proposer offres
  //Choisir les offres a proposer au client et les ajouter a une liste
  afficherOffre() {
   this.router.navigate(["/offre-component/offre-component.component.html"]);
};
// Choisir le client a qui proposer les offres de la liste
// supprimer une offre de la liste des propositions
//* CROQUIS...
}
