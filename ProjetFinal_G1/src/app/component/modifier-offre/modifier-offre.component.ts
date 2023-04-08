import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OffreService } from 'src/app/service/offre.service';

@Component({
  selector: 'app-modifier-offre',
  templateUrl: './modifier-offre.component.html',
  styleUrls: ['./modifier-offre.component.css']
})
export class ModifierOffreComponent implements OnInit {
  id!: number;
  offreForm!: FormGroup;

  constructor(private ar: ActivatedRoute, private os: OffreService, private fb: FormBuilder) {
    this.id = this.ar.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.os.getOffre(this.id).subscribe(data => {
      this.offreForm = this.fb.group({
        id: [data.id, Validators.required],
        type_bien: [data.type_bien],
        adresse: [data.adresse],
        ville: [data.ville],
        prix: [data.prix],
        surface: [data.surface],
        nb_piece: [data.nb_piece],
        meuble: [data.meuble],
        achat: [data.achat],
        exterieur: [data.exterieur],
        croquis: [data.croquis]
      })
    })
  }

  updateOffre() {
    this.os.modifierOffre(this.offreForm.value).subscribe();
    if (this.os.modifierOffre(this.offreForm.value).subscribe()!=null ){
      alert("Mise à jour de l'offre "+this.offreForm.value.id)
    }else{
      alert("ECHEC de la mise à jour")
    }
    console.log(this.offreForm.value.adresse)
    location.reload();
  }

}
