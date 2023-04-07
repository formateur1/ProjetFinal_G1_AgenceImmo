import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Offre } from 'src/app/model/offre.model';
import { OffreService } from 'src/app/service/offre.service';
import { Router } from '@angular/router';
import { Gerant } from 'src/app/model/gerant.model';
import { GerantServiceService } from 'src/app/service/gerant-service.service';

@Component({
  selector: 'app-offre-gerant',
  templateUrl: './offre-gerant.component.html',
  styleUrls: ['./offre-gerant.component.css']
})
export class OffreGerantComponent implements OnInit{

  constructor(private http: HttpClient,private os:OffreService,private gs:GerantServiceService ,  private router:Router ) { }

  listeOffres$!:Observable<Offre[]>;
  newPropositionOffre!:Observable<Offre>;
  

  ngOnInit():Observable<Offre[]> {
    
   return this.listeOffres$= this.os.getListeOffres();
  }
  connecte = sessionStorage.getItem('connecte')
  idG = sessionStorage.getItem('id');
  idGerant = Number(this.idG);
  getOffre(id:number){
    return this.os.getOffre(id);
  }
  
  modifierOffre(id:number)
  {
    return this.router.navigate(['modifierOffre/'+id]);
  }

  deleteOffre(id:number)
  {
    alert ("L'offre "+id + " va être supprimée")
    return this.os.deleteOffre(id);
  }
  ajoutProposition(idOffre:number){
    alert("offre "+idOffre+" ajoutée à la liste du gérant "+ this.idGerant)
    return this.
    gs.ajoutProposition(this.idGerant,idOffre);
  }
}
