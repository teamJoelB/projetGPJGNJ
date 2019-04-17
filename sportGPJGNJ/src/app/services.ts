import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http : Http) { }

  getLocalUser(){
    return new Date();
  }
  setLocalUser(){
    return new Date();
  }

  checkUser(user){
    this.http.post('http://localhost:8080/adress', user).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  }
}
