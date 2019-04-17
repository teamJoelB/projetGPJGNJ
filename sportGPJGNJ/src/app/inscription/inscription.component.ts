import { Component, OnInit } from '@angular/core';
import { User } from '../Class/User';
import { Http } from '@angular/http';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(private http : Http) { }

  user : User = new User();

  ngOnInit() {
  }

  createUser(){
    
  }

}
