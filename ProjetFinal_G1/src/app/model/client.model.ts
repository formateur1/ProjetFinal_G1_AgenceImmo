export class Client {

     id!:string;
     nom:string;
     prenom:string;
     login:string;
     mdp:string;
     mail:string;
     agence_immobiliere:number;
     adresse:string;
     telephone:string;

    constructor(nom:string, prenom:string, login:string, mdp:string, mail:string,  agence_immobiliere:number, adresse:string, telephone:string){
        this.nom=nom;
        this.prenom=prenom;
        this.login=login;
        this.mdp=mdp;
        this.mail=mail;
        this.agence_immobiliere=agence_immobiliere;
        this.adresse=adresse;
        this.telephone=telephone;
    }
}
