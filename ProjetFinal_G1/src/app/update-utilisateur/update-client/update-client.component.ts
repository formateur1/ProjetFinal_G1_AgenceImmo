import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
  id!: number;
  clientForm!: FormGroup;
  constructor(private ar: ActivatedRoute, private fb: FormBuilder, private r: Router, private as: AdminService) {
    this.id = this.ar.snapshot.params['id'];
  }
  ngOnInit(): void {

    this.as.getClientById(this.id).subscribe(data => {
      this.clientForm = this.fb.group({
        id: [data.id, Validators.required],
        nom:[data.nom],
        prenom: [data.prenom],
        login: [data.login],
        mdp: [data.mdp],
        mail: [data.mail],
        agence_immobiliere: [data.agence_immobiliere],
        adresse: [data.adresse],
        telephone: [data.telephone]
       
      })
    })
  }

  updateClient() {
    this.as.updateClient(this.clientForm.value).subscribe();
    this.r.navigate(['listeUtilisateur'])
  }
}
