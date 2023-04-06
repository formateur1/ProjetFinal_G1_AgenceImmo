import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-gerant',
  templateUrl: './update-gerant.component.html',
  styleUrls: ['./update-gerant.component.css']
})
export class UpdateGerantComponent {
  id!: number;
 gerantForm!: FormGroup;
  constructor(private ar: ActivatedRoute, private fb: FormBuilder, private r: Router, private as: AdminService) {
    this.id = this.ar.snapshot.params['id'];
  }
  ngOnInit(): void {

    this.as.getGerantById(this.id).subscribe(data => {
      this.gerantForm = this.fb.group({
        id: [data.id, Validators.required],
        nom:[data.nom],
        prenom: [data.prenom],
        login: [data.login],
        mdp: [data.mdp],
        mail: [data.mail],
        agence_immobiliere: [data.agence_immobiliere],
       
      })
    })
  }

  updateGerant() {
    this.as.updateGerant(this.gerantForm.value).subscribe();
    this.r.navigate(['listeUtilisateur'])
  }
}
