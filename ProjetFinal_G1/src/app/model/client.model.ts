export class Client {

     id!:string;
     nom:string;
     prenom:string;
     login:string;
     mdp:string;
     mail:string;

    constructor(nom:string, prenom:string, login:string, mdp:string, mail:string){
        this.nom=nom;
        this.prenom=prenom;
        this.login=login;
        this.mdp=mdp;
        this.mail=mail;
    }
}
