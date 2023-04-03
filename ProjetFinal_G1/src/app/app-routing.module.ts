
import { Component, NgModule } from '@angular/core';
import { OffreComponentComponent } from './component/offre-client/offre-component.component';
import { FormOffreComponent } from './formulaire/form-offre/form-offre.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"listeOffres", component:OffreComponentComponent},
  {path:"formOffre", component:FormOffreComponent}
 // {path:"modifierOffre", }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
