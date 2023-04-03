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
 
  constructor(private fb:FormBuilder, private http:HttpClient,private os:OffreService){}

  ngOnInit(): void {
    this.offreForm=this.fb.group({
      type_bien:"",
      adresse:"",
      ville:"",
      prix:0,
      surface:0,
      nb_piece:0,
      meuble:false,
      achat:false,
      exterieur:false,
      croquis:""
      
    })
  }
     id!:number;
     type_bien:string="";
     adresse:string="";
     ville:string="";
     prix!:number;
     surface!:number;
     nb_piece!:number;
     meuble!:boolean;
     achat!:boolean;
     exterieur!:boolean;
     croquis:string="";
     note!:number;

     o!:Offre;
     offreForm!:FormGroup;

  addOffre()
  {
    this.os.saveOffre
    (
      new Offre(
        this.offreForm.value.type_bien,this.offreForm.value.adresse,this.offreForm.value.ville,
        this.offreForm.value.prix,this.offreForm.value.surface,this.offreForm.value.nb_piece,
        this.offreForm.value.meuble, this.offreForm.value.achat,this.exterieur,this.offreForm.value.croquis
      )
    );
}
}
