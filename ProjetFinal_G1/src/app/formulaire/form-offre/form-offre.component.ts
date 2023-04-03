import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Offre } from 'src/app/model/offre.model';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-offre',
  templateUrl: './form-offre.component.html',
  styleUrls: ['./form-offre.component.css']
})
export class FormOffreComponent implements OnInit {
 
  constructor(private fb:FormBuilder, private http:HttpClient){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  saveOffre(offre:Offre):Observable<Offre>
  {
      alert("Offre enregistrée :"+ offre);
      return this.http.post<Offre>("http://localhost8080/gerant/saveOffre", offre);
}
}
