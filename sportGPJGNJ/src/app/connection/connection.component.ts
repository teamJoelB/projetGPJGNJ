import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../Class/User';
import { ServicesService } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  user: User = new User();
  u;
  constructor(private http: Http, private services: ServicesService, private router: Router) {
  }

  ngOnInit() {
  }

  tryLogin() {
    this.http.post('http://localhost:8080/userconnexion', this.user).subscribe(data => {
      this.u = data.json();
      console.log('this.u :: ', this.u);
      if (!(this.u['id'] === 'undefined' || this.u['id'] === null || this.u['id'] === "")) {
        this.services.setLocalUser(JSON.stringify(this.u));
        this.router.navigate(['/evenements']);
      }else{
        this.router.navigate(['/connexion']);
      }
    }, err => {
      console.log(err);
    });
  }
}
