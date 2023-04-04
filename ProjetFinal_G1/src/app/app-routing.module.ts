
import { Component, NgModule } from '@angular/core';
import { OffreComponentComponent } from './component/offre-client/offre-component.component';
import { FormOffreComponent } from './formulaire/form-offre/form-offre.component';
import { Routes, RouterModule } from '@angular/router';
import { FormClientComponent } from './form-client/form-client.component';
import { OffreGerantComponent } from './component/offre-gerant/offre-gerant.component';
import { ModifierOffreComponent } from './component/modifier-offre/modifier-offre.component';

const routes: Routes = [
  {path:'listeOffres', component:OffreComponentComponent},
  {path:'formOffre', component:FormOffreComponent},
  {path:'formClient', component:FormClientComponent},
  {path:'listeOffresGerant', component:OffreGerantComponent},
  {path:'modifierOffre/:id',component:ModifierOffreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
