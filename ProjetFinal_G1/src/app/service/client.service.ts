import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/client.model';
import { HttpClient } from '@angular/common/http';
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
    return this.http.delete<void>("http://localhost:8080/client/supprimerClient/"+id)
  }
  getClientById(id:number):Observable<Client>
  {
    return this.http.get<Client>("http://localhost:8080/client/get/"+id)
  }
  modify(client:Client):Observable<void>
  {
    return this.http.put<void>("http://localhost:8080/client/modify/", client.id)
  }
}
