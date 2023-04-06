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
  ajoutOffre(): void {
    this.router.navigate(['formOffre']);
  }

  connecte = sessionStorage.getItem('connecte')
  getDataPrenom(){
    return sessionStorage.getItem('prenom')
  }


  getOffreById() {
    console.log(this.idOffre);
    return this.router.navigate(['offreById/' + this.idOffre]);
  }

  afficherListeOffres(): void {
    this.router.navigate(["listeOffresGerant"]);
  };

  afficherPropositions(): void {
    this.router.navigate(["listePropositionsGerant"]);
  };

}
