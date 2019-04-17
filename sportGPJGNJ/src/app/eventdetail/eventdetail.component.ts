import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ServicesService } from '../services';

@Component({
  selector: 'app-eventdetail',
  templateUrl: './eventdetail.component.html',
  styleUrls: ['./eventdetail.component.css']
})
export class EventdetailComponent implements OnInit {

  data;
  id;
  loaded = false;
  tennis = false;
  foot = false;
  volley = false;
  basket = false;
  bad = false;
  cap = false;
  
  constructor(private http : Http, 
    private myService : ServicesService) { }

  ngOnInit() {
    this.getMyEvent(9);
    //this.id = service.id
  }

  getMyEvent(id){
    this.http.get('http://localhost:8080/event/'+id)
    .subscribe(
      response => {
        this.data = response.json();
        this.loaded = true;
      }, err => {
        console.log(err);
      }
    );
  }
}
