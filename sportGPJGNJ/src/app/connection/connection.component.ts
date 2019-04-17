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
<<<<<<< HEAD
      console.log(data);
=======
      this.u = data.json();
      this.services.setLocalUser(JSON.stringify(this.u));
>>>>>>> bf14e3a93055dd0ad9b1a2e4104375797b8e2760
    }, err => {
      console.log(err);
    });
  }
}
