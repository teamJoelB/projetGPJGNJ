import { Component, OnInit } from '@angular/core';
import { User } from '../Class/User';
import { ServicesService } from '../services'

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor() { }

  user : User = new User();

  ngOnInit() {
  }

  createUser(){
    
  }

}
