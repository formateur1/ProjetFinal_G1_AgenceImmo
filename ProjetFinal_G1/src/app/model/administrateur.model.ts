export class Administrateur {
    id!:string;
     nom:string;
     prenom:string;
     login:string;
     mdp:string;
     mail:string;
     agence_immobiliere:number;

     constructor(nom:string, prenom:string, login:string, mdp:string, mail:string,  agence_immobiliere:number){
        this.nom=nom;
        this.prenom=prenom;
        this.login=login;
        this.mdp=mdp;
        this.mail=mail;
        this.agence_immobiliere=agence_immobiliere;
     }
}
