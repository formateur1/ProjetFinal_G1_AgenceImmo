import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Offre } from 'src/app/model/offre.model';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OffreService } from 'src/app/service/offre.service';

@Component({
  selector: 'app-form-offre',
  templateUrl: './form-offre.component.html',
  styleUrls: ['./form-offre.component.css']
})
export class FormOffreComponent implements OnInit {

  constructor(private fb: FormBuilder, private http: HttpClient, private os: OffreService) { }

  ngOnInit(): void {
    this.offreForm = this.fb.group({
      type_bien: "",
      adresse: "",
      ville: "",
      prix: 0,
      surface: 0,
      nb_piece: 0,
      meuble: false,
      achat: false,
      exterieur: false,
      croquis: ""

    })
  }

  type_bien: string = "";
  adresse: string = "";
  ville: string = "";
  prix!: number;
  surface!: number;
  nb_piece!: number;
  meuble!: boolean;
  achat!: boolean;
  exterieur!: boolean;
  croquis: string = "";

  savedOffre!: Offre;
  offreForm!: FormGroup;
  savedMeuble!: boolean;
  savedExt!: boolean;
  savedAchat!: boolean;



  addOffre() {

    if (this.offreForm.value.meuble == "true") {

      this.savedMeuble = true;
    } else { this.savedMeuble = false }

    if (this.offreForm.value.exterieur == "true") {
      this.savedExt = true;
    } else { this.savedExt = false }
    if (this.offreForm.value.achat == "true") {
      this.savedAchat = true;
    } else { this.savedAchat = false }


    this.savedOffre = new Offre
      (
        this.offreForm.value.type_bien, this.offreForm.value.adresse, this.offreForm.value.ville,
        this.offreForm.value.prix, this.offreForm.value.surface, this.offreForm.value.nb_piece,
        this.savedMeuble, this.savedAchat, this.savedExt, this.offreForm.value.croquis
      )

   if(this.savedOffre!=null) {
      this.os.saveOffre(this.offreForm.value).subscribe();
      alert("Offre "+this.offreForm.value.adresse+" ajoutée");
      console.log(this.offreForm.value);
      location.reload();
    } else {
      alert("Erreur dans le formulaire, offre incorrecte ")
    }
  }

}
