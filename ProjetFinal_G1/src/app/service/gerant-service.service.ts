import { Injectable } from '@angular/core';
import { Offre } from '../model/offre.model';
import { Client } from '../model/client.model';

@Injectable({
  providedIn: 'root'
})
export class GerantServiceService {

  constructor() { }

  listeOffres:Offre[] = []
  listeClients:Client[] = []

  addOffre(offre:Offre):Observable <Offre> {
    return this.http.post<Offre>("URL/gerant/saveOffre",offre)
  }
  updateOffre(offre:Offre):Observable <Offre> {
    return this.http.post<Offre>("URL/gerant/saveOffre",offre)
  }

  deleteOffre(id:number):Observable<void>{
    return this.http.delete<void>("/deleteOffre/"+id);
  }

  getAllOffres():Observable<Offre[]>{
    return this.http.get<Offre[]>("/client/listeOffres");
  }

  getOffrebyID(id:number):Observable<Offre>{
    return this.http.get<Offre>("/gerant/offre/"+id);
  }

  
  
}
