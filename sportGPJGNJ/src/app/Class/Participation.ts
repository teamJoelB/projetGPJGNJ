import {Evenement} from './Evenement';
import {User} from './User';
export class Participation{
    constructor(id,event,participant){
        this.id=id;
        this.event=event;
        this.participant=participant;
    }
    id:number;
    event:Evenement;
    participant:User;
}