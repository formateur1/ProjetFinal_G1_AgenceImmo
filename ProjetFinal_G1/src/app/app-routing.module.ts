import { Component, NgModule } from '@angular/core';
import { OffreComponentComponent } from './component/offre-client/offre-component.component';
import { FormOffreComponent } from './formulaire/form-offre/form-offre.component';
import { Routes, RouterModule } from '@angular/router';
import { FormClientComponent } from './form-client/form-client.component';
import { ListeClientComponent } from './liste-client/liste-client.component';
import { AccueilComponent } from './accueil/accueil.component';
import { QuestionComponent } from './component/question/question.component';
import { FormulaireQuestionComponent } from './FormulairesQuestion/formulaire-question/formulaire-question.component';
import { FormRepondreComponent } from './FormulairesQuestion/form-repondre/form-repondre.component';

const routes: Routes = [
  {path:"listeOffres", component:OffreComponentComponent},
  {path:"formOffre", component:FormOffreComponent},
  {path:'formClient', component:FormClientComponent},
  {path:'clients', component:ListeClientComponent},
  {path:"question", component:QuestionComponent},
  {path:"question/form", component:FormulaireQuestionComponent},
  {path:"question/:id", component:FormRepondreComponent},
  {path:'accueil', component:AccueilComponent},
  {path:'', component:AccueilComponent}
 // {path:"modifierOffre",}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
