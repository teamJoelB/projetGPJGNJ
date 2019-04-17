import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http : Http) { }

  getLocalUser(){
    return localStorage.getItem('user');
  }
  setLocalUser(stringifiedJSONUser){
    localStorage.setItem('user',stringifiedJSONUser);
  }

  saveUser(user){
    this.http.post('http://localhost:8080/user', user).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
    return true;
  }
}
