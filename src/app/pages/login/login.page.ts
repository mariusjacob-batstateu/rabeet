import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginPage: boolean=true
  signupPage: boolean=false
  isPassword: boolean=false //for password show toggle
  

  constructor() { }

  ngOnInit() {
  }

  signup(){
    this.loginPage=false
    this.signupPage=true
  }
  login(){
    this.loginPage=true
    this.signupPage=false
  }




  // utilities
  togglePassword(){
    this.isPassword = !this.isPassword;
  }
}
