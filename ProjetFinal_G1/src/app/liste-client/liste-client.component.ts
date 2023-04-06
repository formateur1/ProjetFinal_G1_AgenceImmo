import { Component } from '@angular/core';
import { ClientService } from '../service/client.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from '../model/client.model';
import { GerantServiceService } from '../service/gerant-service.service';

@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.css']
})
export class ListeClientComponent {
  constructor(private cs:ClientService, private router:Router, private gs:GerantServiceService) {}
  idGerant!:any;
  listeC$!:Observable<Client[]>;

  ngOnInit(): void {
    this.listeC$=this.cs.getClients();
  }

supprimer(id:number)
{
  this.cs.delete(id);
  this.router.navigate(['clients'])
}

proposerOffre(id:any){
  {
    alert ("La liste d'offres du gérant "+this.idGerant +" va être envoyée au client "+id)
    return this.gs.proposerOffre(id, this.idGerant);
  }
}
}
