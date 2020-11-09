import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   user: UserModel = new UserModel();

  constructor(private auth: LoginService,
              private router: Router) { }

  ngOnInit(): void {
  }

  login(data: NgForm) {
    const loginResult = this.auth.login(this.user);
    if (loginResult) {
      this.router.navigateByUrl('/home');
    } else {
      alert('Incorrect user or password. Please, retry');
    }
  }

  // validateLogin() {
  //   if(this.user.username && this.user.password) {
  //     this.loginService.validateLogin(this.user).subscribe(result => {
  //     console.log('result is ', result);
  //     if (result['status'] === 'success') {
  //       this.router.navigate(['/home']);
  //     } else {
  //       alert('Wrong username password')
  //     }
  //   }, error => {
  //     console.log('error is ', error);
  //   });
  //   } else {
  //     alert('enter user name and password');
  //   }
  }
