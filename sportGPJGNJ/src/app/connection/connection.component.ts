import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  constructor(private http:Http) { }

  ngOnInit() {
  }

  tryLogin() {
    this.http.post('http://localhost:8080/adress', this.user).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  }
}

}
