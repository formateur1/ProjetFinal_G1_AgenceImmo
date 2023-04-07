import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../service/question.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Question } from '../../model/question';
import { Observable } from 'rxjs';
import { Gerant } from 'src/app/model/gerant.model';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-formulaire-question',
  templateUrl: './formulaire-question.component.html',
  styleUrls: ['./formulaire-question.component.css']
})
export class FormulaireQuestionComponent implements OnInit{

  constructor(private qs:QuestionService, private fb:FormBuilder, private as:AdminService){}

  contenu!:string

  listeGerants$!:Observable<Gerant[]>

  idCompte = Number(sessionStorage.getItem('id'))

  ngOnInit(): void {
    this.questionForm = this.fb.group({
      contenu:[null, Validators.required],
      idGerant:[null, Validators.required],
    })

    this.listeGerants$ = this.as.getGerantsValide()
  }
  
  questionForm!: FormGroup

  saveQuestion(){
    this.qs.ajoutQuestion(new Question(this.questionForm.value.contenu,
      this.questionForm.value.idGerant,
      this.idCompte)).subscribe()
      alert("La question est envoyée")
  }
}
