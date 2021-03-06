import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  {path:"\dashboard", component:DashboardComponent},
  {path:"\login", component:LoginComponent},
  {path:"\signup", component:SignupComponent},
  //in order for this redirect to works the path should already been asigned ^^
  {path:"",redirectTo:"\login",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
