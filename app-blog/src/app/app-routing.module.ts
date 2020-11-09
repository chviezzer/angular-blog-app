import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './guards/login.guard';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
 



const routes: Routes = [

  {path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent, canActivate: [LoginGuard] },
  {path: '**', redirectTo: 'home '}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
