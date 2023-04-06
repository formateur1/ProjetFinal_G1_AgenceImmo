import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent {
  id!: number;
  adminForm!: FormGroup;
  constructor(private ar: ActivatedRoute, private fb: FormBuilder, private r: Router, private as: AdminService) {
    this.id = this.ar.snapshot.params['id'];
  }
  ngOnInit(): void {

    this.as.getAdminById(this.id).subscribe(data => {
      this. adminForm = this.fb.group({
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

  updateAdmin() {
    this.as.updateAdmin(this.adminForm.value).subscribe();
    this.r.navigate(['listeUtilisateur'])
  }
}
