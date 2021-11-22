import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL = "http://137.184.137.150:3000/";

  constructor(
    private http: HttpClient,
  ) { }

  login(userData){
    // console.log(userData)
    return this.http.post(this.URL + "sso/login", userData);
  }

  register(){

  }

  getUserData(){
    
  }

}
