import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {

  }

  login(email, password){
    // console.log(email.value, password.value)
    try {
      const userData = {
        email: email.value,
        password: password.value
      }
      this.auth.login(userData).subscribe(
        res => {
          console.log(res)
        },
        err => {
          console.error(err)
        }
      );
    } catch (err) {
      console.error(err)
    }
  }

  forgotPass(){
    this.router.navigate(['/forgot-password']);
  }

}
