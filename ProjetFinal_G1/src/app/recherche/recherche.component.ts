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
}
