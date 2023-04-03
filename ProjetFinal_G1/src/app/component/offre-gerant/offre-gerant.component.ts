import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Offre } from 'src/app/model/offre.model';
import { OffreService } from 'src/app/service/offre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offre-gerant',
  templateUrl: './offre-gerant.component.html',
  styleUrls: ['./offre-gerant.component.css']
})
export class OffreGerantComponent implements OnInit{

  constructor(private http: HttpClient,private os:OffreService, private router:Router) { }

  listeOffres$!:Observable<Offre[]>;

  ngOnInit(): void {
    this.listeOffres$= this.os.getListeOffres();
  }

  modifierOffre(id:number)
  {
    return this.router.navigate(['modifierOffre']);
  }
  deleteOffre(id:number):Observable<void>
  {
    alert ("L'offre "+id + " est supprimée")
    return this.http.delete<void>("http://localhost8080/gerant/deleteOffre"+id)
  }
}
