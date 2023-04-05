import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { QuestionService } from '../../service/question.service';
import { Question } from '../../model/question';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit{

  constructor(private qs:QuestionService, private route: ActivatedRoute){}

  listeQuestion$!:Observable<Question[]>

  ngOnInit(){
    this.listeQuestion$ = this.qs.readQuestion()
  }

  
}
