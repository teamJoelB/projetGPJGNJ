import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
link ='http://localhost:8080';
  constructor(private http : Http) { }

  eventId;
  isUserConnected(){
    let temp = localStorage.getItem('user');
    return !((temp === 'undefined' || temp === null || temp === ""))
  }
  setLocalUser(stringifiedJSONUser){
    localStorage.setItem('user',stringifiedJSONUser);
  }

  saveUser(user){
    this.http.post(this.link+'/user', user).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
    return true;
  }
  getEventId(){
    return this.eventId;
  }
  setEventId(id){
    this.eventId = id;
  }
}
