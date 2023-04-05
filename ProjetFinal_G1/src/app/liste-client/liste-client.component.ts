import { Component } from '@angular/core';
import { ClientService } from '../service/client.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from '../model/client.model';

@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.css']
})
export class ListeClientComponent {
  constructor(private cs:ClientService, private router:Router) {}

  listeC$!:Observable<Client[]>;

  ngOnInit(): void {
    this.listeC$=this.cs.getClients();
  }
}
