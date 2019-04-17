export class Sport{
    constructor(id,nom,nbrMin,nbrMax,lien){
        this.id=id;
        this.nom=nom;
        this.nbrMin=nbrMin;
        this.nbrMax=nbrMax;
        this.lien=lien;
    }
    id:number;
    nom:string;
    nbrMin:number;
    nbrMax:number;
    lien:string;
}
