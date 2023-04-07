import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit{

  id!:number
  nom!:string
  prenom!:string
  compteForm$!:FormGroup

  compteFormComplet!:FormGroup

  constructor(private as:AdminService, private fb:FormBuilder){}


  ngOnInit(): void {
    this.compteForm$ = this.fb.group({
      id:[null, Validators.required],
    })

    if (sessionStorage.getItem('reload') == 'true') {
      sessionStorage.setItem('reload', 'false')
      location.reload()
    }
  }

  saveData(){
    if(this.compteForm$.value.gerant == false ) {
    this.as.getClientById(this.compteForm$.value.id).subscribe(data => {
      this.compteFormComplet = this.fb.group({
        id:[data.id],
        nom:[data.nom],
        prenom:[data.prenom]
      })

      sessionStorage.setItem('id', this.id.toString())
      sessionStorage.setItem('nom', this.compteFormComplet.value.nom)
      sessionStorage.setItem('prenom', this.compteFormComplet.value.prenom)
      sessionStorage.setItem('connecte', 'true')
      alert("Vous êtes connecté")
      location.reload()
    })
} else {
  this.as.getGerantById(this.compteForm$.value.id).subscribe(data => {
    this.compteFormComplet = this.fb.group({
      id:[data.id],
      nom:[data.nom],
      prenom:[data.prenom]
    })
    sessionStorage.setItem('id', this.id.toString())
    sessionStorage.setItem('nom', this.compteFormComplet.value.nom)
    sessionStorage.setItem('prenom', this.compteFormComplet.value.prenom)
    sessionStorage.setItem('connecte', 'true')
    
    alert("Vous êtes connecté (Gérant)")
  })
}
    
      
     

    
    
  }


  deco(){
    sessionStorage.clear()
    alert("Vous êtes déconnecté")
    location.reload()
  }

 
}
