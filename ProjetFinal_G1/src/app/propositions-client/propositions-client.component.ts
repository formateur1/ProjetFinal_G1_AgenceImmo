import { Component } from '@angular/core';
import { ClientService } from '../service/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Offre } from '../model/offre.model';
import { OffreService } from '../service/offre.service';

@Component({
  selector: 'app-propositions-client',
  templateUrl: './propositions-client.component.html',
  styleUrls: ['./propositions-client.component.css']
})
export class PropositionsClientComponent {
  constructor(private http: HttpClient,private ar:ActivatedRoute, private cs:ClientService ,  private router:Router , private os:OffreService) { }

  listePropositions$!:Observable<Offre[]>;
  idClient=Number(sessionStorage.getItem('id'));
  
  ngOnInit():Observable<Offre[]> {
   return this.listePropositions$= this.cs.getListePropositions(this.idClient);
  }
  
  connecte = sessionStorage.getItem('connecte');
  id = Number(sessionStorage.getItem('id'));
  
  retirerProposition(idOffre:number)
  {      
    this.cs.retirerProposition(idOffre,this.idClient).subscribe()
    if(this.cs.retirerProposition(idOffre,this.idClient).subscribe()!=null){
    alert ("L'offre "+idOffre + " a été retirée de votre liste d'offres sauvegardées. ")
    location.reload();
    } else{
      alert("ECHEC du retrait de votre liste ")
    }    
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
