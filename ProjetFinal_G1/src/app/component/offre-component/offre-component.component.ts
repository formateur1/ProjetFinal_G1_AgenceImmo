import { Component, OnInit } from '@angular/core';
import { Offre } from 'src/app/model/offre.model';
import { OffreService } from 'src/app/service/offre.service';

@Component({
  selector: 'app-offre-component',
  templateUrl: './offre-component.component.html',
  styleUrls: ['./offre-component.component.css']
})
export class OffreComponentComponent implements OnInit {

  listeOffres:Offre[]=[];
  constructor(private os:OffreService){}
  ngOnInit(): void {
    this.listeOffres= this.os.getListeOffres();
  }

}
