import { Component } from '@angular/core';
import { ClientService } from '../service/client.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from '../model/client.model';
import { GerantServiceService } from '../service/gerant-service.service';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.css']
})
export class ListeClientComponent {
  constructor(private cs: ClientService, private router: Router, private gs: GerantServiceService, private as:AdminService) { }
  connecte = sessionStorage.getItem('connecte');
  role = sessionStorage.getItem('role');
  id = Number(sessionStorage.getItem('id'));
  listeC$!: Observable<Client[]>;

  ngOnInit(): void {
    this.listeC$ = this.as.getClientsValide();
  }

  supprimerClient(idClient: any) {
    this.as.deleteClientValide(Number(idClient)).subscribe();
    location.reload()
  }
  modifierClient(idClient: any) {
    // MANQUE FORMULAIRE////
    
  }
  proposerListeOffres(idClient: any) {
    alert("La liste d'offres du gérant " + this.id + " va être envoyée au client " + idClient)
    return this.gs.proposerListeOffres( Number(idClient), this.id ).subscribe();
    location.reload();
  }

}
