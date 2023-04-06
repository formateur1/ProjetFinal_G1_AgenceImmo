import { Component, NgModule } from '@angular/core';
import { OffreComponentComponent } from './component/offre-client/offre-component.component';
import { FormOffreComponent } from './formulaire/form-offre/form-offre.component';
import { Routes, RouterModule } from '@angular/router';
import { FormClientComponent } from './form-client/form-client.component';
import { OffreGerantComponent } from './component/offre-gerant/offre-gerant.component';
import { ModifierOffreComponent } from './component/modifier-offre/modifier-offre.component';
import { ListeClientComponent } from './liste-client/liste-client.component';
import { AccueilComponent } from './accueil/accueil.component';
import { GerantComponentComponent } from './component/gerant-component/gerant-component.component';
import { OffreByIdComponent } from './component/offre-by-id/offre-by-id.component';
import { FormAdminComponent } from './form-admin/form-admin.component';
import { FormGerantComponent } from './form-gerant/form-gerant.component';
import { ValiderUtilisateurComponent } from './valider-utilisateur/valider-utilisateur.component';
import { QuestionComponent } from './component/question/question.component';
import { FormulaireQuestionComponent } from './FormulairesQuestion/formulaire-question/formulaire-question.component';
import { FormRepondreComponent } from './FormulairesQuestion/form-repondre/form-repondre.component';
import { ListeUtilisateurComponent } from './liste-utilisateur/liste-utilisateur.component';


const routes: Routes = [
  {path:"listeOffres", component:OffreComponentComponent},
  {path:"formOffre", component:FormOffreComponent},
  {path:'formClient', component:FormClientComponent},
  {path:'formAdmin', component:FormAdminComponent},
  {path:'formGerant', component:FormGerantComponent},
  {path:'clients', component:ListeClientComponent},
  {path:"question", component:QuestionComponent},
  {path:"question/form", component:FormulaireQuestionComponent},
  {path:"question/:id", component:FormRepondreComponent},
  {path:'accueil', component:AccueilComponent},
  {path:'validerUtilisateur', component:ValiderUtilisateurComponent},
  {path:'listeUtilisateur', component:ListeUtilisateurComponent},
  {path:'listeOffresGerant', component:OffreGerantComponent},
  {path:'modifierOffre/:id',component:ModifierOffreComponent },
  {path:'', component:AccueilComponent},
  {path:'accueilGerant',component:GerantComponentComponent},
  {path:'offreById/:idOffre',component:OffreByIdComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
