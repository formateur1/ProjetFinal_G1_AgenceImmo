import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mon-premier-angular';
  nom:string = "boberto";
  test:boolean=true;
  voitures:any[]=[
    {"marque":"renault","model":"clio","prix":9999.66},
    {"marque":"taxi","model":"oui-oui","prix":6666.66},
    {"marque":"renault","model":"punto","prix":1234.66}
  ]
  urlImage:string="C:\Users\libel\OneDrive\Images\Saved Pictures\fond d ecran.jpg";
  tailleImage:number=50;
  altImg:string="mon text si limage via url declarer en attribut marche pas"

  cliquer():void{
    console.log("on a cliquer sur le bouton dans html")
  }
  msgModel:string="";
}
