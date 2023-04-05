import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from '../model/client.model';
import { ClientService } from '../service/client.service';


@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {

  constructor(private fb:FormBuilder, private r:Router, private cs:ClientService){}
  ngOnInit(): void {
    this.clientForm=this.fb.group({
      nom:[''],
      prenom:[''],
      login:[''],
      mdp:[''],
      mail:[''],
      agence_immobiliere:[null],
      adresse:[''],
      telephone:['']
  })
  }
  nom:string="";
  prenom:string="";
  login:string="";
  mdp:string="";
  mail:string="";
  agence_immobiliere!:number;
  adresse:string="";
  telephone:string="";
  
  clientForm!:FormGroup;

  saveClient()
  { 
    this.cs.addClient(new Client(this.clientForm.value.nom, this.clientForm.value.prenom, 
      this.clientForm.value.login, this.clientForm.value.mdp, this.clientForm.value.mail, 
      this.clientForm.value.agence_immobiliere, this.clientForm.value.adresse, this.clientForm.value.telephone)).subscribe();
  }
}
