export class Mail{
    constructor(id,objet,contenu,destinataire){
        this.id=id;
        this.objet=objet;
        this.contenu=contenu;
        this.destinataire=destinataire;
    }
    id:number;
    objet:string;
    contenu:string;
    destinataire:string;
}
