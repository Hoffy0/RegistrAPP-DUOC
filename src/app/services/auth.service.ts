import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL = "http://137.184.137.150:3000/";

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  login(userData){
    // console.log(userData)
    return this.http.post<any>(this.URL + "sso/login", userData);
  }

  register(newUserData){
    return this.http.post<any>(this.URL + "sso/register", newUserData);
  }

  getUserData(){
    if(!!localStorage.getItem('token')){
      const token = localStorage.getItem('token')
      return this.http.get<any>(this.URL + "sso/data/" + token);
    }else{
      console.error("Not token found")
    }
  }

  isLogged(){
    if(!!localStorage.getItem('token')){
      return true;
    }else{
      this.router.navigate(['/'])
      return false;
    }
  }

}
