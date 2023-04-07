import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Offre } from 'src/app/model/offre.model';
import { GerantServiceService } from 'src/app/service/gerant-service.service';
import { OffreService } from 'src/app/service/offre.service';

@Component({
  selector: 'app-offre-by-id',
  templateUrl: './offre-by-id.component.html',
  styleUrls: ['./offre-by-id.component.css']
})
export class OffreByIdComponent implements OnInit {
  connecte = sessionStorage.getItem('connecte')
  idG= sessionStorage.getItem('id');
  idGerant = Number(this.idG);
  id!:number;

  constructor(private os:OffreService, private ar:ActivatedRoute, private router:Router, private gs:GerantServiceService){ 
    this.id = ar.snapshot.params['idOffre'];
  }

  offre$!:Observable<Offre>;

  ngOnInit(): void {
   
    this.offre$ = this.os.getOffre(this.id);

    console.log(this.offre$.subscribe())
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
    return this.gs.ajoutProposition(this.idGerant,idOffre);
  }
}
