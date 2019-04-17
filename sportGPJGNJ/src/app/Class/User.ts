export class User{
    constructor(id,prenom,nom,mail,mdp){
        this.id=id;
        this.prenom=prenom;
        this.nom=nom;
        this.mail=mail;
        this.mdp=mdp;
    }
    id:number;
    prenom:string;
    nom:string;
    pseudo:string;
    mail:string;
    mdp:string;
}
