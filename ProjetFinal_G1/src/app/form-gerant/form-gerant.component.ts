import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Gerant } from '../model/gerant.model';
import { GerantServiceService } from '../service/gerant-service.service';
import { AdminService } from '../service/admin.service';


@Component({
  selector: 'app-form-gerant',
  templateUrl: './form-gerant.component.html',
  styleUrls: ['./form-gerant.component.css']
})
export class FormGerantComponent implements OnInit {

  constructor(private fb:FormBuilder, private r:Router, private as:AdminService){}
  ngOnInit(): void {
    this.gerantForm=this.fb.group({
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
  gerantForm!:FormGroup;

  saveGerant()
  { 
    this.as.addGerant(this.gerantForm.value).subscribe();
      this.r.navigate(['validerUtilisateur'])
  }
}
