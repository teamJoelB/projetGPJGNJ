import {Sport} from './Sport';
import {User} from './User';

export class Evenement{
    constructor(){
    }
    id:number;
    titre:string;
    description:string;
    dateEvent:string;
    horaire:string;
    sport:Sport;
    createur:User;
    nbrParticipants:number;
    nbrmax:number;
}

