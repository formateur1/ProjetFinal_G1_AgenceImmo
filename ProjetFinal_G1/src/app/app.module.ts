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
import { ModifierOffreComponent } from './component/modifier-offre/modifier-offre.component';
import { OffreByIdComponent } from './component/offre-by-id/offre-by-id.component';
import { GerantComponentComponent } from './component/gerant-component/gerant-component.component';
import { FormAdminComponent } from './form-admin/form-admin.component';
import { FormGerantComponent } from './form-gerant/form-gerant.component';

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
    ModifierOffreComponent,
    OffreByIdComponent,
    GerantComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, FormClientComponent, FormGerantComponent, FormAdminComponent]
})
export class AppModule { }
