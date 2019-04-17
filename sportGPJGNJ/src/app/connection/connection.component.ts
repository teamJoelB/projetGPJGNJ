import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../Class/User';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  user:User = new User();
  constructor(private http:Http) { }

  ngOnInit() {
  }

  tryLogin() {
    this.http.post('http://localhost:8080/userconnexion', this.user).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  }
}
