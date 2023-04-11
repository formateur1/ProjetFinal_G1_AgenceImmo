import { Component, OnInit } from '@angular/core';
import { Offre } from 'src/app/model/offre.model';
import { OffreService } from 'src/app/service/offre.service';
import { Observable } from 'rxjs/internal/Observable';
import { ClientService } from 'src/app/service/client.service';
import { Client } from 'src/app/model/client.model';
//mip moup mip
@Component({
  selector: 'app-offre-component',
  templateUrl: './offre-component.component.html',
  styleUrls: ['./offre-component.component.css']
})
export class OffreComponentComponent implements OnInit {
  
 constructor(private os:OffreService, private cs:ClientService) { }
  connecte = sessionStorage.getItem('connecte');
  role = sessionStorage.getItem('role');
  idClient = sessionStorage.getItem('id');
  listeOffres$!:Observable<Offre[]>;

  ngOnInit(): void {
this.listeOffres$= this.os.getListeOffres();
  }

  sauvegarderOffre(idOffre:number){
    this.cs.sauvegarderOffre(idOffre, Number(this.idClient)).subscribe();
    if( this.cs.sauvegarderOffre(idOffre, Number(this.idClient)).subscribe() != null){
      alert ("Offre sauvegardée");  
    } else {
      alert("ECHEC sauvegarde")
    }
    location.reload();
  }
}
