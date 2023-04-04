import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FormClientComponent } from './form-client/form-client.component';
import { QuestionComponent } from './question/question.component';
import { FormulaireQuestionComponent } from './formulaire-question/formulaire-question.component';
import { FormRepondreComponent } from './form-repondre/form-repondre.component';


@NgModule({
  declarations: [
    AppComponent,
    // FormClientComponent,
    QuestionComponent,
    FormulaireQuestionComponent,
    FormRepondreComponent,
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
