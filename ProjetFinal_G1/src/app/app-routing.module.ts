import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffreService } from './service/offre.service';
import { OffreComponentComponent } from './component/offre-component/offre-component.component';
import { FormOffreComponent } from './formulaire/form-offre/form-offre.component';

const routes: Routes = [
  {path:"listeOffres", component:OffreComponentComponent},
  {path:"formOffre", component:FormOffreComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
