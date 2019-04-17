import {Sport} from './Sport';
import {User} from './User';

export class Evenement{
    constructor(id,titre,description,dateEvent,horaire,sport,createur,nbrParticipants,nbrmax){
        this.id=id;
        this.titre=titre;
        this.description=description;
        this.dateEvent=dateEvent;
        this.horaire=horaire;
        this.sport=sport;
        this.createur=createur;
        this.nbrParticipants=nbrParticipants;
        this.nbrmax=nbrmax;
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

