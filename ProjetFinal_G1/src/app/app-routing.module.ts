import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormClientComponent } from './form-client/form-client.component';
import { ListeClientComponent } from './liste-client/liste-client.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  {path:'formClient', component:FormClientComponent},
  {path:'clients', component:ListeClientComponent},
  {path:'accueil', component:AccueilComponent},
  {path:'', component:AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
