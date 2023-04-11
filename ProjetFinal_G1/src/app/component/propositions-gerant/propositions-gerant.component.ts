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
  constructor(private http: HttpClient, private ar: ActivatedRoute, private gs: GerantServiceService, private router: Router) { }

  listePropositions$!: Observable<Offre[]>;
  idClient!: number;
  idGerant = Number(sessionStorage.getItem('id'));
  role = sessionStorage.getItem('role')
  ngOnInit(): Observable<Offre[]> {

    return this.listePropositions$ = this.gs.getListePropositions(this.idGerant);
  }

  modifierOffre(idOffre: number) {
    return this.router.navigate(['modifierOffre/' + idOffre]);
  }

  
  //Retirer une offre de la liste des propositions du gérant
  deleteProposition(idOffre: number) {
    this.gs.deleteProposition(idOffre, this.idGerant).subscribe();
    if (this.gs.deleteProposition(idOffre, this.idGerant).subscribe() != null) {
      alert("L'offre " + idOffre + " a été retirée de votre liste des propositions, gérant " + this.idGerant)
    } else {
      alert("ECHEC de la suppression");
    }
    location.reload();
  }

  proposerOffre(idOffre: number, idClient: number) {
    this.gs.proposerOffre(idOffre, idClient).subscribe();
    if(this.gs.proposerOffre(idOffre, idClient).subscribe()!=null){
       alert("L'offre " + idOffre + " a bien été envoyée au client " + idClient)
    }else {
      alert("ECHEC de la proposition");
    }
    location.reload();
  }

  proposerListeOffres(idClient: number) {
    this.gs.proposerListeOffres(idClient, this.idGerant).subscribe();
    if(this.gs.proposerListeOffres(idClient, this.idGerant).subscribe()!=null){
    alert("Votre liste de propositions (gérant " + this.idGerant + ") a bien été envoyée au client " + idClient)
    }else {
      alert("ECHEC des propositions");
    }
    location.reload();
  }
}
