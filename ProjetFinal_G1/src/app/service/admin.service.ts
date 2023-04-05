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

  getAdmins() :Observable<Administrateur[]>{

    return this.http.get<Administrateur[]>("http://localhost:8080/admin/getAdmins");
  }
  
  addAdmin(admin:Administrateur):Observable<Administrateur>
  {
    return this.http.post<Administrateur>("http://localhost:8080/admin/ajouterAdmin", admin);
  }
  validerAdmin(admin:Administrateur):Observable<Administrateur>
  {
    return this.http.post<Administrateur>("http://localhost:8080/admin/validerAdmin", admin);
  }
  
  delete(id:number)
  {
    return this.http.delete<void>("http://localhost:8080/admin/deleteAdmin/"+id)
  }
  getAdminById(id:number):Observable<Administrateur>
  {
    return this.http.get<Administrateur>("http://localhost:8080/admin/get/"+id)
  }
  // modify(admin:Administrateur):Observable<void>
  // {
  //   return this.http.put<void>("http://localhost:8080/admin/modify", admin.id)
  // }

  
  addClient(client:Client):Observable<Client>
  {
    return this.http.post<Client>("http://localhost:8080/admin/ajouterClient", client);
  }

  validerClient(client:Client):Observable<Client>
  {
    return this.http.post<Client>("http://localhost:8080/admin/validerClient", client);
  }

  deleteClient(id:number):Observable<void>
  {
    return this.http.delete<void>("http://localhost:8080/admin/deleteClient/"+ id);
  }
  getClients() :Observable<Client[]>{

    return this.http.get<Client[]>("http://localhost:8080/admin/getClients");
  }

  addGerant(gerant:Gerant):Observable<Gerant>
  {
    return this.http.post<Gerant>("http://localhost:8080/admin/ajouterGerant", gerant);
  }
  validerGerant(gerant:Gerant):Observable<Gerant>
  {
    return this.http.post<Gerant>("http://localhost:8080/admin/validerGerant", gerant);
  }
  deleteGerant(id:number):Observable<void>
  {
    return this.http.delete<void>("http://localhost:8080/admin/deleteGerant/"+id)
  }
  getGerants() :Observable<Gerant[]>{

    return this.http.get<Gerant[]>("http://localhost:8080/admin/getGerants");
  }
}
