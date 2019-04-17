import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  getLocalUser(){
    return localStorage.getItem('user');
  }
  setLocalUser(stringifiedJSONUser){
    localStorage.setItem('user',stringifiedJSONUser);
  }
}
