import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router,
    private loadingController: LoadingController,
    private auth: AuthService
  ) { }

  ngOnInit() {

  }

  login(email, password){
    // console.log(email.value, password.value)
    
    const userData = {
      email: email.value,
      password: password.value
    }
    this.auth.login(userData).subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token);
        this.router.navigate(['/home/tabs/tab1']);
      },
      err => {
        console.error(err)
      }
    )
  };
  
  
  forgotPass(){
    this.router.navigate(['/forgot-password']);
  }


}
