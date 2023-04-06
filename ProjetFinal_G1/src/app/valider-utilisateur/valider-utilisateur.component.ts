import { Component } from '@angular/core';
import { ClientService } from '../service/client.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client} from '../model/client.model';
import { GerantServiceService } from '../service/gerant-service.service';
import { AdminService } from '../service/admin.service';
import { Gerant } from '../model/gerant.model';
import { Administrateur } from '../model/administrateur.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-valider-utilisateur',
  templateUrl: './valider-utilisateur.component.html',
  styleUrls: ['./valider-utilisateur.component.css']
})
export class ValiderUtilisateurComponent {
  constructor(private as:AdminService, private router:Router) {}

  listeC$!:Observable<Client[]>;
  listeA$!:Observable<Administrateur[]>;
  listeG$!:Observable<Gerant[]>;

  ngOnInit(): void {
    this.listeC$=this.as.getClients();
    this.listeA$=this.as.getAdmins();
    this.listeG$=this.as.getGerants();
  }

supprimerAdmin(id:string)
{
  this.as.delete(parseInt(id)).subscribe();
  this.router.navigate(['validerUtilisateur'])
  location.reload()
}

validerAdmin(a:Administrateur, id:string)
{
  this.as.delete(parseInt(id)).subscribe(); 
  this.as.validerAdmin(a).subscribe();
  this.router.navigate(['validerUtilisateur'])
  location.reload()
}
supprimerGerant(id:string)
{
  this.as.deleteGerant(parseInt(id)).subscribe();
  this.router.navigate(['validerUtilisateur'])
  location.reload()
}

validerGerant(g:Gerant, id:string)
{
  this.as.deleteGerant(parseInt(id)).subscribe(); 
  this.as.validerGerant(g).subscribe();
  this.router.navigate(['validerUtilisateur'])
  location.reload()
}
supprimerClient(id:string)
{
  this.as.deleteClient(parseInt(id)).subscribe();
  this.router.navigate(['validerUtilisateur'])
  location.reload()
}

validerClient(c:Client, id:string)
{
  this.as.deleteClient(parseInt(id)).subscribe(); 
  this.as.validerClient(c).subscribe();
  this.router.navigate(['validerUtilisateur'])
  location.reload()
}
}
