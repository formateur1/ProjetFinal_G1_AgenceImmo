import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { QuestionService } from '../../service/question.service';
import { Question } from '../../model/question';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit{

  constructor(private qs:QuestionService, private route: ActivatedRoute, private router:Router){}


  listeQuestion$!:Observable<Question[]>

  ngOnInit(){
    this.listeQuestion$ = this.qs.readQuestion()
    if (sessionStorage.getItem('reload') == 'true') {
      sessionStorage.setItem('reload', 'false')
      location.reload()
    }
  }

  
}
