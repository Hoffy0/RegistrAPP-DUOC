import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router,
    private loadingController: LoadingController,
  ) { }

  ngOnInit() {
  }

  forgotPass(){
    this.router.navigate(['/forgot-password']);
  }

  async login(email, password){
    // console.log(email.value);
    // console.log(password.value)
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Validando datos...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
    this.router.navigate(['/home/tabs/tab1'])
  }


}
