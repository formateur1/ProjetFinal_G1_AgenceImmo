import { Component, OnInit } from '@angular/core';
import { OffreService } from '../service/offre.service';
import { Observable } from 'rxjs';
import { Offre } from '../model/offre.model';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  
  constructor(private os:OffreService) { }

listeOffres$!:Observable<Offre[]>;
ngOnInit(): void {
this.listeOffres$= this.os.getListeOffres();
  }

afficher: boolean= false

type_bien!: string
choixMaison(){
this.type_bien="maison"
console.log("maison")
  }
choixAppartement(){
this.type_bien="appartement"
  }

achat!: boolean
choixAchat(){
this.achat=true
  }
choixLocation(){
this.achat=false
  }

meuble!: boolean
choixMeuble(){
this.meuble=true
  }
choixNonMeuble(){
this.meuble=false
  }  

exterieur!: boolean
choixAvecExterieur(){
this.exterieur=true
  }
choixSansExterieur(){
this.exterieur=false
  }

ville!:string

note!: string;


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

moyennesNotes: { [offreId: number]: number } = {};

getMoyenneNotes(offreId: number): void {
  this.os.getMoyenneNotes(offreId).subscribe((moyenne) => {
    this.moyennesNotes[offreId] = moyenne;
  });
}


}
