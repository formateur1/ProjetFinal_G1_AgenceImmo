import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../service/question.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-repondre',
  templateUrl: './form-repondre.component.html',
  styleUrls: ['./form-repondre.component.css']
})
export class FormRepondreComponent implements OnInit {
  [x: string]: any;

  ide!:number
  questionForm!:FormGroup
  reponse!:string

  constructor(private qs:QuestionService, private ar:ActivatedRoute, private fb:FormBuilder, private router:Router){
    this.ide = this.ar.snapshot.params['id']
  }

  ngOnInit(): void {
    this.qs.getQuestion(this.ide).subscribe(data => {
      this.questionForm = this.fb.group({
        id:[data.id],
        contenu:[data.contenu],
        date:[data.date],
        reponse:[""],
        idC:[data.idC],
        idG:[data.idG]
      })
    })
    
  }

  repQuestion(){
    console.log(this.questionForm.value)
    this.qs.repQuestion(this.questionForm.value).subscribe()
    this.router.navigate(['/question']) //, {queryParams: { re: 'true' }})
  }
 

}
