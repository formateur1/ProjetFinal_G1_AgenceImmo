import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  id!: number
  nom!: string
  prenom!: string
  compteForm$!: FormGroup
  role!: string
  compteFormComplet!: FormGroup

  constructor(private as: AdminService, private fb: FormBuilder) { }


  ngOnInit(): void {
    this.compteForm$ = this.fb.group({
      id: [null, Validators.required],
      role: [null]
    })

    if (sessionStorage.getItem('reload') == 'true') {
      sessionStorage.setItem('reload', 'false')
      location.reload()
    }
  }

  saveData() {
    if (this.compteForm$.value.role == 'client') {
      this.as.getClientById(this.compteForm$.value.id).subscribe(data => {
        this.compteFormComplet = this.fb.group({
          id: [data.id],
          nom: [data.nom],
          prenom: [data.prenom]
        })

        sessionStorage.setItem('id', this.id.toString())
        sessionStorage.setItem('nom', this.compteFormComplet.value.nom)
        sessionStorage.setItem('prenom', this.compteFormComplet.value.prenom)
        sessionStorage.setItem('connecte', 'ok')
        sessionStorage.setItem('role', 'client')

        alert("Vous êtes connecté (Client)")
        location.reload()
      })
    } if (this.compteForm$.value.role == 'gerant') {
      this.as.getGerantById(this.compteForm$.value.id).subscribe(data => {
        this.compteFormComplet = this.fb.group({
          id: [data.id],
          nom: [data.nom],
          prenom: [data.prenom]
        })
        sessionStorage.setItem('id', this.id.toString())
        sessionStorage.setItem('nom', this.compteFormComplet.value.nom)
        sessionStorage.setItem('prenom', this.compteFormComplet.value.prenom)
        sessionStorage.setItem('connecte', 'ok')
        sessionStorage.setItem('role', 'gerant')

        alert("Vous êtes connecté (Gérant)")
        location.reload()
      })
    } if (this.compteForm$.value.role == 'admin') {
      this.as.getAdminById(this.compteForm$.value.id).subscribe(data => {
        this.compteFormComplet = this.fb.group({
          id: [data.id],
          nom: [data.nom],
          prenom: [data.prenom]
        })
        sessionStorage.setItem('id', this.id.toString())
        sessionStorage.setItem('nom', this.compteFormComplet.value.nom)
        sessionStorage.setItem('prenom', this.compteFormComplet.value.prenom)
        sessionStorage.setItem('connecte', 'ok')
        sessionStorage.setItem('role', 'admin')

        alert("Vous êtes connecté (Admin)")
        location.reload()
      })

    } else {
      alert("ECHEC CONNEXION : id "+this.compteForm$.value.id);
    }
  }


  deco() {
    sessionStorage.clear()
    alert("Vous êtes déconnecté")
    location.reload()
  }
}

