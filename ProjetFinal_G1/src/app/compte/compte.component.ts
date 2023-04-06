import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent {

  id!:number
  compteForm!:FormGroup

  

  saveData(){
    sessionStorage.setItem('name', 'Rana Hasnain')
  }

  getData(){
    return sessionStorage.getItem('name')
  }
}
