import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../service/question.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Question } from '../../model/question';

@Component({
  selector: 'app-formulaire-question',
  templateUrl: './formulaire-question.component.html',
  styleUrls: ['./formulaire-question.component.css']
})
export class FormulaireQuestionComponent implements OnInit{

  constructor(private qs:QuestionService, private fb:FormBuilder){}
  contenu!:string
  idG!:number
  idC!:number

  ngOnInit(): void {
    this.questionForm = this.fb.group({
      contenu:[null, Validators.required],
      idG:[null, Validators.required],
      idC:[null, Validators.required]
    })
  }
  
  questionForm!: FormGroup

  saveQuestion(){
    this.qs.ajoutQuestion(new Question(this.questionForm.value.contenu,
      this.questionForm.value.idG,
      this.questionForm.value.idC)).subscribe()
      alert("La question est envoyée")
      
  }
}
