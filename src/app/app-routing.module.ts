import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {path:'home',
  component: HomeComponent},
  {path:'contact',
  component: ContactComponent},
   {path:'about',
  component: AboutComponent},
  {path:'dashboard',
  component: DashboardComponent},
  {path:'login',
  component: LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
