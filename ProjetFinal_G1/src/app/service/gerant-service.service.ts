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

  constructor(private http: HttpClient) { }

  listeOffres: Offre[] = []
  listeClients: Client[] = []

//Gerer les offres misent en ligne
  addOffre(offre:Offre):Observable <Offre> {
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
//CRUD Gerant
  getGerants(): Observable<Gerant[]> {

    return this.http.get<Gerant[]>("http://localhost:8080/gerant/getGerants");
  }

  addGerant(gerant: Gerant): Observable<Gerant> {
    console.log(Gerant);
    return this.http.post<Gerant>("http://localhost:8080/gerant/ajouterGerant", gerant);
  }
//Gerer ka liste des propositions
  getListePropositions(idGerant: number): Observable<Offre[]> {
    return this.http.get<Offre[]>("http://localhost:8080/gerant/listePropositions/" + idGerant);
  }

  ajoutProposition(idGerant: number, idOffre: number): void {
    const url = `http://localhost:8080/gerant/ajoutPropOffre/${idOffre}/${idGerant}`;
    console.log("envoie de la requette ajouter proposition")
    this.http.put<void>(url, null);
  }

  deleteProposition(idGerant: number, idOffre: number): void {
    const url = `http://localhost:8080/gerant/deletePropOffre/${idOffre}/${idGerant}`;
    console.log("envoie de la requette retirer proposition" + idOffre)
    this.http.put<Offre[]>(url, null);

  }
  //Envoyer une ou plusieurs propositions d'offres
  proposerOffre(idOffre: number, idClient:number){
    const url = `http://localhost:8080/client/recevoirProposition/${idOffre}/${idClient}}`;
    console.log("envoie de la requette pour que le client "+ idClient+ "recoit l'offre" + idOffre)
    this.http.put<Offre[]>(url, null);
  }
  proposerListeOffres(idClient:number, idGerant:number){
    console.log("envoie de la requette proposer la liste d'offres du gérant " + idGerant+" au client "+ idClient)
    const url = `http://localhost:8080/client/recevoirListePropositions/${idGerant}/${idClient}`;
    this.http.put<void>(url, []);
  }
}
