import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client} from '../model/client.model';
import { AdminService } from '../service/admin.service';
import { Gerant } from '../model/gerant.model';
import { Administrateur } from '../model/administrateur.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.css']
})
export class ListeUtilisateurComponent {
  constructor(private as:AdminService, private router:Router) {}

  listeC$!:Observable<Client[]>;
  listeA$!:Observable<Administrateur[]>;
  listeG$!:Observable<Gerant[]>;

  ngOnInit(): void {
    this.listeC$=this.as.getClientsValide();
    this.listeA$=this.as.getAdminsValide();
    this.listeG$=this.as.getGerantsValide();
  }

supprimerAdmin(id:string)
{
  this.as.deleteAdminValide(parseInt(id)).subscribe();
  this.router.navigate(['validerUtilisateur'])
  location.reload()
}

updateAdmin(id:string)
{
  this.router.navigate(['updateAdmin/'+id])
}
supprimerGerant(id:string)
{
  this.as.deleteGerantValide(parseInt(id)).subscribe();
  this.router.navigate(['validerUtilisateur'])
  location.reload()
}

updateGerant(id:string)
{
  this.router.navigate(['updateGerant/'+id])
}
supprimerClient(id:string)
{
  this.as.deleteClientValide(parseInt(id)).subscribe();
  this.router.navigate(['validerUtilisateur'])
  location.reload()
}

updateClient(id:string)
{
  this.router.navigate(['updateClient/'+id])
}
}
