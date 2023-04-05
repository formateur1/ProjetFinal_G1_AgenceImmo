import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormClientComponent } from './form-client/form-client.component';
import { ListeClientComponent } from './liste-client/liste-client.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormOffreComponent } from './formulaire/form-offre/form-offre.component';
import { OffreGerantComponent } from './component/offre-gerant/offre-gerant.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormAdminComponent } from './form-admin/form-admin.component';
import { FormGerantComponent } from './form-gerant/form-gerant.component';
import { ValiderUtilisateurComponent } from './valider-utilisateur/valider-utilisateur.component';

@NgModule({
  declarations: [
    AppComponent,
    FormClientComponent,
    FormAdminComponent,
    FormGerantComponent,
    ListeClientComponent,
    AccueilComponent,
    FormOffreComponent,
    OffreGerantComponent,
    ValiderUtilisateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
