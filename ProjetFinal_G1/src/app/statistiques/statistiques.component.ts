import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit{
constructor(private as:AdminService){}
  
nbClients!:number
noteMoy!:number
nbOffres!:number
ngOnInit(): void {
    this.as.nombreClients().subscribe(data => {this.nbClients=data});
    this.as.nombreOffres().subscribe(data => {this.nbOffres=data});
    this.as.moyenneNotes().subscribe(data => {this.noteMoy=data});
  }


}
