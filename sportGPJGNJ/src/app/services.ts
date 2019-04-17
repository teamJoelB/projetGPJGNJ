import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  eventId;
  constructor() { }

  getLocalUser(){
    return new Date();
  }
  setLocalUser(){
    return new Date();
  }
  getEventId(){
    return this.eventId;
  }
  setEventId(id){
    this.eventId = id;
  }
}
