import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Administrateur } from '../model/administrateur.model';
import { AdminService } from '../service/admin.service';


@Component({
  selector: 'app-form-admin',
  templateUrl: './form-admin.component.html',
  styleUrls: ['./form-admin.component.css']
})
export class FormAdminComponent implements OnInit {

  constructor(private fb:FormBuilder, private r:Router, private as:AdminService){}
  ngOnInit(): void {
    this.adminForm=this.fb.group({
      nom:[''],
      prenom:[''],
      login:[''],
      mdp:[''],
      mail:[''],
      agence_immobiliere:[null],
  })
  }
  nom:string="";
  prenom:string="";
  login:string="";
  mdp:string="";
  mail:string="";
  agence_immobiliere!:number;
  
  adminForm!:FormGroup;

  saveAdmin()
  { 
    this.as.addAdmin(new Administrateur(this.adminForm.value.nom, this.adminForm.value.prenom, 
      this.adminForm.value.login, this.adminForm.value.mdp, this.adminForm.value.mail, 
      this.adminForm.value.agence_immobiliere)).subscribe();
  }
}
