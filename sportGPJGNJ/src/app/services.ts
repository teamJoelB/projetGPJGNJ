import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  getLocalUser(){
    return new Date();
  }
  setLocalUser(){
    return new Date();
  }
}
