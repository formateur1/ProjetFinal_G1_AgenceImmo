import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'ProjetFinal_G1';

  checkboxGerant:boolean = false
  connecte = sessionStorage.getItem('connecte')
  role = sessionStorage.getItem('role')
  
  constructor(private router:Router){}

  changerCheck(){
    this.checkboxGerant = !this.checkboxGerant
  }

  redirect(){
    sessionStorage.setItem('reload', 'true')
    this.router.navigate(['/compte'])
  }
  
}
