import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetFinal_G1';

  checkboxGerant:boolean = false

  changerCheck(){
    this.checkboxGerant = !this.checkboxGerant
  }
}
