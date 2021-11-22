/* eslint-disable no-trailing-spaces */
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  nombre = 'Pablo';
  usuario = {
    email: '',
    password: ''

  };

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  forgotPass(){
    this.router.navigate(['/forgot-password']);
  }

  onSubmit(formulario: NgForm){
    console.log('submit');
    console.log(this.usuario);
    console.log(formulario);
  }

  

}
