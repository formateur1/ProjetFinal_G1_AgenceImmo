import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/model/client.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gerant-component',
  templateUrl: './gerant-component.component.html',
  styleUrls: ['./gerant-component.component.css']
})
export class GerantComponentComponent implements OnInit{
  private router!: Router;

  constructor(private httpclient:HttpClient){}
  

 ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // Option 1:Choisir l'offre a proposer au client (id)
  propositionOffre(id:number) {
   this.router.navigate(['/listeOffres']);
};
//Option 2Choisir le client a qui proposer les offres

}
