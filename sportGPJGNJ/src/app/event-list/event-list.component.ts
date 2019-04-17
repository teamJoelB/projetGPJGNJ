import { Component, OnInit } from '@angular/core';
import {Evenement} from '../Class/Evenement';
import {Sport} from '../Class/Sport';

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
  titre:'Jouons ensemble !',
  description:'ça va être sympa',
   dateEvent:'demain',
   horaire:'12h',
  sport:'Rugby',
  createur:'Moi moi moi',
  nbrParticipants:'1',
  nbrmax:'number',

}
ListEvent=[
  {
    id:1232,
    titre:'tennis à fond !',
    description:'ça va être top',
     dateEvent:'demain',
     horaire:'12h',
    sport:'Rugby',
    createur:'Moi moi moi',
    nbrParticipants:'1',
    nbrmax:'number',

},
{
  id:1232,
  titre:'rugby du sale !',
  description:'ça va être cool',
   dateEvent:'demain',
   horaire:'12h',
  sport:'Rugby',
  createur:'Moi moi moi',
  nbrParticipants:'1',
  nbrmax:'number',

},
{
  id:1232,
  titre:'tournoi de chifoumi !',
  description:'ça va être agréable',
   dateEvent:'demain',
   horaire:'12h',
  sport:'Rugby',
  createur:'Moi moi moi',
  nbrParticipants:'1',
  nbrmax:'number',

},
{
  id:1232,
  titre:'aquaponey !',
  description:'ça va être détente',
   dateEvent:'demain',
   horaire:'12h',
  sport:'Rugby',
  createur:'Moi moi moi',
  nbrParticipants:'1',
  nbrmax:'number',

}]

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
  constructor() { 
    this.ListEvent.forEach(element => {
      console.log(element.id);
    });
    
  }

  ngOnInit() {
  }
getEvents(){


}
SelectEvent(){
  

}
}
