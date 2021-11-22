import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  userData = {
    name: ""
  }
  hour: number;

  constructor(
    private authService: AuthService,
  ) {}

  ngOnInit(){
    let date = new Date()
    this.hour = date.getHours();

    this.authService.getUserData().subscribe(
      res => {
        this.userData = res.user;
        console.log(this.userData)
      },
      err => {
        console.error(err)
      }
    );
    

    
  }

}
