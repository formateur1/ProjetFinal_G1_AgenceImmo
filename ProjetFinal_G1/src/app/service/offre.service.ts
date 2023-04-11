import { Injectable } from '@angular/core';
import { Offre } from '../model/offre.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class OffreService {
  getMoyennesNotes() {
    throw new Error('Method not implemented.');
  }

 // listeO:Offre[]=[
    //new Offre(1,"appartement","15 rue mystere","Montpellier",850,45,3,true,false,false,"",4),
    //new Offre(2,"maison","666 rue Ducomplot","Grabel",356000,100,5,false,true,true,"",5),
    //new Offre(3,"studio","120 place Liberté","Paris",278000,20,1,true,false,false,"",2) ];

  constructor(private http: HttpClient) { }
  
  getListeOffres():Observable<Offre[]>{
  return  this.http.get<Offre[]>("http://localhost:8080/gerant/listeOffres");
  }

  // gettype_bien():Observable<Offre[]>{
  //   return  this.http.get<Offre[]>("http://localhost:8080/gerant/listeOffres");
  //   }

  getOffre(id:number):Observable<Offre> {
    return this.http.get<Offre>("http://localhost:8080/gerant/offreId/"+id);
  }
  
  saveOffre(offre:Offre):Observable<Offre>
  {
      alert("Offre enregistrée :"+ offre.adresse);
      console.log(offre);
     return this.http.post<Offre>("http://localhost:8080/gerant/saveOffre", offre);
  }   
  

  modifierOffre(offre:Offre):Observable<Offre>
  {
  return  this.http.put<Offre>("http://localhost:8080/gerant/updateOffre", offre);
  }
  
  deleteOffre(id:number)
  {
    alert ("L'offre "+ id + " a été supprimée")
    return this.http.delete<void>("http://localhost8080/gerant/deleteOffre/"+id)
  }

  ajouterNote(offreId: number, note: number): Observable<void> {
    return this.http.post<void>("http://localhost:8080/offres/" + offreId + "/ajouterNote/" + note, {})
  }

  moyenneNotes(offreId: number): Observable<number> {
    return this.http.get<number>("http://localhost:8080/offres/" + offreId + "/moyenneNotes")
  }

  getMoyenneNotes(offreId: number): Observable<number> {
    return this.http.get<number>("http://localhost:8080/offres/" + offreId + "/moyenneNotes");
  }
  
}
