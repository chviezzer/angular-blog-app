import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanActivate {
    constructor( private auth: LoginService,
      private router: Router ) {}
  
  canActivate(): boolean {
  if (this.auth.isAuth() ) {
  console.log('Acceso correcto');
  return true;
  } else {
  console.log('Acceso denegado');
  this.router.navigateByUrl('/login');
  return false;
  }
  console.log('Acceso denegado');
  return false;
  }
}