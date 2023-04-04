import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrateur } from '../model/administrateur.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getAdmins() :Observable<Administrateur[]>{

    return this.http.get<Administrateur[]>("http://localhost:8080/admin/getAdmins");
  }
  
  addAdmin(admin:Administrateur):Observable<Administrateur>
  {
    console.log(Administrateur);
    return this.http.post<Administrateur>("http://localhost:8080/admin/ajouterAdmin", admin);
  }
  
  // delete(id:number):Observable<void>
  // {
  //   return this.http.delete<void>("http://localhost:8080/admin/delete"+id)
  // }
  // getClientById(id:number):Observable<Administrateur>
  // {
  //   return this.http.get<Administrateur>("http://localhost:8080/admin/get"+id)
  // }
  // modify(admin:Administrateur):Observable<void>
  // {
  //   return this.http.put<void>("http://localhost:8080/admin/modify", admin.id)
  // }
}
