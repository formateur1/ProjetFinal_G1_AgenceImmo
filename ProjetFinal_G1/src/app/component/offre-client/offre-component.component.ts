import { Component, OnInit } from '@angular/core';
import { Offre } from 'src/app/model/offre.model';
import { OffreService } from 'src/app/service/offre.service';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-offre-component',
  templateUrl: './offre-component.component.html',
  styleUrls: ['./offre-component.component.css']
})
export class OffreComponentComponent implements OnInit {
  
  constructor(private http: HttpClient,private os:OffreService) { }

  listeOffres$!:Observable<Offre[]>;
  ngOnInit(): void {
    this.listeOffres$= this.os.getListeOffres();
  }
  

  ajouterNote(offreId: number, note: string): void {
    // Attention : ce qui est récupérer depuis le fichier html est toujours un string même si c'est un number qui est saisi, il faut donc le reconvertir en number.
    // Const c'est une variable dont la valuer ne peut être modifiée
    const noteEnNumber = parseFloat(note);
    this.os.ajouterNote(offreId, noteEnNumber).subscribe( 
     () => {
      alert("La note a bien été prise en compte");
     // this.listeOffres$ = this.os.getListeOffres();
    },
    (error) => {
      console.error("Erreur lors de l'ajout de la note", error);
      //Permet d'afficher les détails de l'erreur
      console.error("Détails de l'erreur : ", error.error)
      alert("Erreur lors de l'ajout de la note");      
    }
    );
  }

}