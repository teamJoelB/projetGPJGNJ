import { Component, OnInit } from '@angular/core';
import {Evenement} from '../Class/Evenement';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
//   event1:new Evenement();
//   event1.id=12;
// ListEvent:{
//   event1
// };

event :{
 id:1232,
 titre:'titre',
 description:'ça va être sympa',
  dateEvent:'demain',
  horaire:'12h',
 sport:'Rugby',
 createur:'Moi moi moi',
 nbrParticipants:'1',
 nbrmax:'number',

}
//ListEvent1.add(event);

//new Evenement(21,'','','','','','','','',);
// {
// Event : id:1232;
// titre:'titre';
// description:'ça va être sympa';
// dateEvent:'demain';
// horaire:'12h';
// sport:'Rugby';
// createur:'Moi moi moi';
// nbrParticipants:'1';
// nbrmax:'number';
// }
  constructor() { }

  ngOnInit() {
  }

}
