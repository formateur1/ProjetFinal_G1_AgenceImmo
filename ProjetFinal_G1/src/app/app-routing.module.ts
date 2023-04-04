import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { FormulaireQuestionComponent } from './formulaire-question/formulaire-question.component';
import { FormRepondreComponent } from './form-repondre/form-repondre.component';

const routes: Routes = [
  {path:"question", component:QuestionComponent},
  {path:"question/form", component:FormulaireQuestionComponent},
  {path:"question/:id", component:FormRepondreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
