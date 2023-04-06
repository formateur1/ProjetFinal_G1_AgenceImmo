import { Injectable } from '@angular/core';
import { Offre } from '../model/offre.model';
import { Client } from '../model/client.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Gerant } from '../model/gerant.model';

@Injectable({
  providedIn: 'root'
})
export class GerantServiceService {

  constructor(private http:HttpClient) { }

  listeOffres:Offre[] = []
  listeClients:Client[] = []
  

  /*addOffre(offre:Offre):Observable <Offre> {
    return this.http.post<Offre>("http://localhost:8080/gerant/saveOffre",offre)
  }
  updateOffre(offre:Offre):Observable <Offre> {
    return this.http.post<Offre>("http://localhost:8080/gerant/saveOffre",offre)
  }

  deleteOffre(id:number):Observable<void>{
    return this.http.delete<void>("http://localhost:8080/gerant/deleteOffre/"+id);
  }

  getAllOffres():Observable<Offre[]>{
    return this.http.get<Offre[]>("http://localhost:8080/gerant/listeOffres");
  }

  getOffrebyID(id:number):Observable<Offre>{
    return this.http.get<Offre>("http://localhost:8080/gerant/offre/"+id);
  }
*/
  getGerants() :Observable<Gerant[]>{

    return this.http.get<Gerant[]>("http://localhost:8080/gerant/getGerants");
  }
  
  addGerant(gerant:Gerant):Observable<Gerant>
  {
    console.log(Gerant);
    return this.http.post<Gerant>("http://localhost:8080/gerant/ajouterGerant", gerant);
  }
  
  ajoutProposition( idGerant:number,idOffre:number):Observable<Offre[]>
  {
  const url = `http://localhost:8080/gerant/ajoutPropOffre/${idOffre}/${idGerant}`;
  console.log("envoie de la requette")
  return this.http.put<Offre[]>(url, null);
  } 

  
  
}
