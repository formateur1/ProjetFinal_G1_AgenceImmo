import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Offre } from 'src/app/model/offre.model';
import { GerantServiceService } from 'src/app/service/gerant-service.service';

@Component({
  selector: 'app-propositions-gerant',
  templateUrl: './propositions-gerant.component.html',
  styleUrls: ['./propositions-gerant.component.css']
})
export class PropositionsGerantComponent {
  constructor(private http: HttpClient,private ar:ActivatedRoute, private gs:GerantServiceService ,  private router:Router ) { }

  listePropositions$!:Observable<Offre[]>;
  idGerant!:number;
  idClient!:number;

  ngOnInit():Observable<Offre[]> {
   this.idGerant = this.ar.snapshot.params['idGerant'];
   return this.listePropositions$= this.gs.getListePropositions(this.idGerant);
  }

  modifierOffre(idOffre:number)
  {
    return this.router.navigate(['modifierOffre/'+idOffre]);
  }

  deleteProposition(idOffre:number)
  {
    alert ("L'offre "+idOffre + " va être retirée de la liste des proposition du gérant "+this.idGerant)
    return this.gs.deleteProposition(idOffre,this.idGerant);
  }

  proposerOffre(idOffre: number,idClient:number){
    alert ("L'offre "+idOffre + " va être envoyée au client "+idClient)
    return this.gs.proposerOffre(idOffre, idClient);
  }

  proposerListeOffres(idClient:number)
  {
    alert ("La liste d'offres du gérant "+this.idGerant +" va être envoyée au client "+idClient)
    return this.gs.proposerOffre(idClient, this.idGerant);
  }
}
