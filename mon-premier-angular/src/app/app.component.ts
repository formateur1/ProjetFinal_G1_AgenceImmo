import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

// faire des route option 1
  //  private maRoute;
  // constructor(maRoute:Router){
   //   this.maRoute=maRoute;
  // }
//option 2
  constructor(private maRoute:Router){ }
  onInfo(){
  this.maRoute.navigate(['infos']);
  }
}
