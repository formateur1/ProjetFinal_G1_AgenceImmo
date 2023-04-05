import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../model/question';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }
  
  ajoutQuestion(question:Question):Observable<Question>{
    return this.http.post<Question>("http://localhost:8080/question/create", question)
  }

  readQuestion():Observable<Question[]>{
    return this.http.get<Question[]>("http://localhost:8080/question/read")
  }

  getQuestion(id:number):Observable<Question>{
    return this.http.get<Question>("http://localhost:8080/question/get/" + id)
  }

  repQuestion(question:Question):Observable<void>{
    return this.http.put<void>("http://localhost:8080/question/repondre", question)
  }

}
