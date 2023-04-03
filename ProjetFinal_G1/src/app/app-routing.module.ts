import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormClientComponent } from './form-client/form-client.component';

const routes: Routes = [
  {path:'formClient', component:FormClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
