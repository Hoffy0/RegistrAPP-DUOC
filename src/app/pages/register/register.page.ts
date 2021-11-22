import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form = new FormGroup({
    email:  new FormControl('', [Validators.required, Validators.email]),
    rut: new FormControl('', [Validators.required, Validators.minLength(8)]),
    name:  new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName:  new FormControl('', [Validators.required, Validators.minLength(3)]),
    sLastName:  new FormControl('', [Validators.required, Validators.minLength(3)]),
    password:  new FormControl('', [Validators.required]),
  });
  
  get f(){
    return this.form.controls;
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    public toastController: ToastController,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){

  }

  async toastFunc(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      color: "danger"
    });
    toast.present();
  }

  register(email, rut, name, lastName, sLastName, password){
    const userData = {
      token: "",
      email: email.value,
      rut: rut.value,
      name: name.value,
      lastName: lastName.value,
      sLastName: sLastName.value,
      password: password.value
    }

    this.authService.register(userData).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/home/tabs/tab1']);
      },
      err => {
        console.error(err);
        this.toastFunc(err.error.error);
      }
    );

  }

}
