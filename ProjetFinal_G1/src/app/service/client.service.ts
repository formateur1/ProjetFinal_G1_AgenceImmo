import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/client.model';
import { HttpClient } from '@angular/common/http';
import { Offre } from '../model/offre.model';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  getClients() :Observable<Client[]>{

    return this.http.get<Client[]>("http://localhost:8080/client/listeClients");
  }
  
  addClient(client:Client):Observable<Client>
  {
    console.log(client);
    return this.http.post<Client>("http://localhost:8080/client/enregistrerClient", client);
  }
  
  delete(id:number):Observable<void>
  {
    return this.http.delete<void>("http://localhost:8080/client/delete"+id)
  }
  getClientById(id:number):Observable<Client>
  {
    return this.http.get<Client>("http://localhost:8080/client/get"+id)
  }
  modify(client:Client):Observable<void>
  {
    return this.http.put<void>("http://localhost:8080/client/modify", client.id)
  }

  //Gerer ses propositions 
  getListePropositions(idClient: number): Observable<Offre[]> {
    return this.http.get<Offre[]>("http://localhost:8080/client/listePropositions/" + idClient);
  }
  retirerProposition(idClient: number, idOffre: number): void {
    const url = `http://localhost:8080/client/retirerProposition/${idOffre}/${idClient}`;
    console.log("envoie de la requette retirer proposition" + idOffre)
    this.http.put<Offre[]>(url, null);
  }

}
