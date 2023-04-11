import { Component, OnInit } from '@angular/core';
import { OffreService } from '../service/offre.service';
import { Observable } from 'rxjs';
import { Offre } from '../model/offre.model';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  
  constructor(private os:OffreService) { }

listeOffres$!:Observable<Offre[]>;
ngOnInit(): void {
this.listeOffres$= this.os.getListeOffres();
  }

afficher: boolean= false

type_bien!: string
choixMaison(){
this.type_bien="maison"
console.log("maison")
  }
choixAppartement(){
this.type_bien="appartement"
  }

achat!: boolean
choixAchat(){
this.achat=true
  }
choixLocation(){
this.achat=false
  }

meuble!: boolean
choixMeuble(){
this.meuble=true
  }
choixNonMeuble(){
this.meuble=false
  }  

exterieur!: boolean
choixAvecExterieur(){
this.exterieur=true
  }
choixSansExterieur(){
this.exterieur=false
  }

ville!:string
}
