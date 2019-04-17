import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../Class/User';
import { ServicesService } from '../services';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  user:User = new User();
  u;
  constructor(private http:Http,private services:ServicesService) { }

  ngOnInit() {
  }

  tryLogin() {
    this.http.post('http://localhost:8080/userconnexion', this.user).subscribe(data => {
      this.u = data.json();
      this.services.setLocalUser(JSON.stringify(this.u));
    }, err => {
      console.log(err);
    });
  }
}
