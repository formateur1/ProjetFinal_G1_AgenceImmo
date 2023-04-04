import { Injectable } from '@angular/core';
import { Offre } from '../model/offre.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class OffreService {

 // listeO:Offre[]=[
    //new Offre(1,"appartement","15 rue mystere","Montpellier",850,45,3,true,false,false,"",4),
    //new Offre(2,"maison","666 rue Ducomplot","Grabel",356000,100,5,false,true,true,"",5),
    //new Offre(3,"studio","120 place Liberté","Paris",278000,20,1,true,false,false,"",2) ];

  constructor(private http: HttpClient) { }
  
  getListeOffres():Observable<Offre[]>{
  return  this.http.get<Offre[]>("http://localhost:8080/getListeOffres");
  }

  saveOffre(offre:Offre)
  {
     try {
      this.http.post<Offre>("http://localhost:8080/gerant/saveOffre", offre);
      alert("Offre enregistrée :"+ offre.adresse);
     } catch (error) {
      alert("echec requete http")
     }

      
}

  return  this.http.get<Offre[]>("http://localhost:8080/getListeOffres");
  }

  ajouterNote(offreId: number, note: number): Observable<void> {
    return this.http.put<void>("http://localhost:8080/offres/${offreId}/note/${note}", {})
  }

  moyenneNotes(offreId: number): Observable<number> {
    return this.http.get<number>("http://localhost:8080/offres/${offreId}/moyenneNotes")
  }
  
}
