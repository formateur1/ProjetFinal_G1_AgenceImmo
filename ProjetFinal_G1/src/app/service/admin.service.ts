import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrateur } from '../model/administrateur.model';
import { HttpClient } from '@angular/common/http';
import { Client } from '../model/client.model';
import { Gerant } from '../model/gerant.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  // Administrateur

  getAdminsAttente() :Observable<Administrateur[]>{
    return this.http.get<Administrateur[]>("http://localhost:8080/admin/getAdminsAttente");
  }
  addAdmin(admin:Administrateur):Observable<Administrateur>
  {
    return this.http.post<Administrateur>("http://localhost:8080/admin/ajouterAdmin", admin);
  }
  deleteAdminAttente(id:number)
  {
    return this.http.delete<void>("http://localhost:8080/admin/deleteAdminAttente/"+id)
  }
      // Validation du compte admin
  validerAdmin(admin:Administrateur):Observable<Administrateur>
  {
    return this.http.post<Administrateur>("http://localhost:8080/admin/validerAdmin", admin);
  }

  getAdminsValide() :Observable<Administrateur[]>{

    return this.http.get<Administrateur[]>("http://localhost:8080/admin/getAdminValide");
  }

  getAdminById(id:number):Observable<Administrateur>{

    return this.http.get<Administrateur>("http://localhost:8080/admin/getAdminById/"+id);
  }

  deleteAdminValide(id:number)
  {
    return this.http.delete<void>("http://localhost:8080/admin/deleteAdminValide/"+id)
  }
  updateAdmin(admin:Administrateur):Observable<Administrateur>
  {
    return this.http.put<Administrateur>("http://localhost:8080/admin/updateAdmin", admin)
  }

  // Client

  getClientsAttente() :Observable<Client[]>{

    return this.http.get<Client[]>("http://localhost:8080/admin/getClientsAttente");
  }
  addClient(client:Client):Observable<Client>
  {
    return this.http.post<Client>("http://localhost:8080/admin/ajouterClient", client);
  }
  deleteClientAttente(id:number):Observable<void>
  {
    return this.http.delete<void>("http://localhost:8080/admin/deleteClientAttente/"+ id);
  }
      // Validation du compte client
  validerClient(client:Client):Observable<Client>
  {
    return this.http.post<Client>("http://localhost:8080/admin/validerClient", client);
  }

  getClientsValide() :Observable<Client[]>{

    return this.http.get<Client[]>("http://localhost:8080/admin/getClientsValide");
  }
  getClientById(id:number):Observable<Client>{

    return this.http.get<Client>("http://localhost:8080/admin/getClientById/"+id);
  }
  deleteClientValide(id:number):Observable<void>
  {
    return this.http.delete<void>("http://localhost:8080/admin/deleteClientValide/"+ id);
  }
  updateClient(client:Client):Observable<Client>
  {
    return this.http.put<Client>("http://localhost:8080/admin/updateClient", client)
  }
 
 
  // Gerant
  getGerantsAttente() :Observable<Gerant[]>{

    return this.http.get<Gerant[]>("http://localhost:8080/admin/getGerantsAttente");
  }
  addGerant(gerant:Gerant):Observable<Gerant>
  {
    return this.http.post<Gerant>("http://localhost:8080/admin/ajouterGerant", gerant);
  }
  deleteGerantAttente(id:number):Observable<void>
  {
    return this.http.delete<void>("http://localhost:8080/admin/deleteGerantAttente/"+id)
  }

        // Validation du compte gerant
  validerGerant(gerant:Gerant):Observable<Gerant>
  {
    return this.http.post<Gerant>("http://localhost:8080/admin/validerGerant", gerant);
  }
  getGerantsValide() :Observable<Gerant[]>{

    return this.http.get<Gerant[]>("http://localhost:8080/admin/getGerantsValide");
  }
  getGerantById(id:number):Observable<Gerant>{

    return this.http.get<Gerant>("http://localhost:8080/admin/getGerantById/"+id);
  }
  deleteGerantValide(id:number):Observable<void>
  {
    return this.http.delete<void>("http://localhost:8080/admin/deleteGerantValide/"+id)
  }
  updateGerant(gerant:Gerant):Observable<Gerant>
  {
    return this.http.put<Gerant>("http://localhost:8080/admin/updateGerant", gerant)
  }

  // Statistiques
  moyenneNotes():Observable<number>
  {
    return this.http.get<number>("http://localhost:8080/admin/moyenneNotes")
  }
  nombreClients():Observable<number>
  {
    return this.http.get<number>("http://localhost:8080/admin/nombreClients")
  }
  nombreOffres():Observable<number>
  {
    return this.http.get<number>("http://localhost:8080/admin/nombreOffres")
  }

}
