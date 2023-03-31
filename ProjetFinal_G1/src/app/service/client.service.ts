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

    return this.http.get<Client[]>("http://localhost8080/client/liste");
  }

  addClient(client:Client):Observable<Client>
  {
    return this.http.post<Client>("http://localhost8080/client/inscriptionClients", client);
  }

  delete(id:number):Observable<void>
  {
    return this.http.delete<void>("http://localhost8080/client/delete"+id)
  }
  getClientById(id:number):Observable<Client>
  {
    return this.http.get<Client>("http://localhost8080/client/get"+id)
  }
  modify(client:Client):Observable<void>
  {
    return this.http.put<void>("http://localhost8080/client/modify", client.id)
  }
}
