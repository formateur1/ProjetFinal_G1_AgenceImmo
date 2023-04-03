import { Component, OnInit } from '@angular/core';
import { Offre } from 'src/app/model/offre.model';
import { OffreService } from 'src/app/service/offre.service';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-offre-component',
  templateUrl: './offre-component.component.html',
  styleUrls: ['./offre-component.component.css']
})
export class OffreComponentComponent implements OnInit {

  listeOffres$!:Observable<Offre[]>;
  private os!:OffreService;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.listeOffres$= this.os.getListeOffres();
  }

  
  //BOUTONS
  // false boutonGerant si connexion avec un compte gerant -> fait apparaitre bouton pour proposer offre
  boutonGerant!:boolean;
  boutonClient!:boolean;

}
