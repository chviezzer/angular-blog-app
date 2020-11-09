import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './guards/login.guard';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddPostComponent } from './components/add-post/add-post.component';



const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent }, 
  { path: 'post', component: AddPostComponent },
  { path: 'post', component: AddPostComponent , canActivate: [ LoginGuard ] },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
