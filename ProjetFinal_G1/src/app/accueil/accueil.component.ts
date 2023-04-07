import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {

  cheminImage1 = "../assets/img/bandeau.jpg"

  connecte = sessionStorage.getItem('connecte')
  getData(){
    return sessionStorage.getItem('prenom')
  }
  
}
