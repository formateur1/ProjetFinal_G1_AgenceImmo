
import { Component, NgModule } from '@angular/core';
import { OffreComponentComponent } from './component/offre-client/offre-component.component';
import { FormOffreComponent } from './formulaire/form-offre/form-offre.component';
import { Routes, RouterModule } from '@angular/router';
import { FormClientComponent } from './form-client/form-client.component';
import { ListeClientComponent } from './liste-client/liste-client.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormAdminComponent } from './form-admin/form-admin.component';
import { FormGerantComponent } from './form-gerant/form-gerant.component';
import { ValiderUtilisateurComponent } from './valider-utilisateur/valider-utilisateur.component';

const routes: Routes = [
  {path:"listeOffres", component:OffreComponentComponent},
  {path:"formOffre", component:FormOffreComponent},
  {path:'formClient', component:FormClientComponent},
  {path:'formAdmin', component:FormAdminComponent},
  {path:'formGerant', component:FormGerantComponent},
  {path:'clients', component:ListeClientComponent},
  {path:'accueil', component:AccueilComponent},
  {path:'', component:AccueilComponent},
  {path:'validerUtilisateur', component:ValiderUtilisateurComponent}
 // {path:"modifierOffre",}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
