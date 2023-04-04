export class Offre {

    public id!:number;
        // type_bien : appartement/maison/studio
    public type_bien!:string;
    public adresse!:string;
    public ville!:string;
    public prix!:number;
    public surface!:number;
    public nb_piece!:number;
        //true = meublé, false = non meublé
    public meuble!:boolean;
        //true= achat, false = location
    public achat!:boolean;
        //true = exterieur, false = absence d'exterieur
    public exterieur!:boolean;
        //croquis = string lien URL du croquis
    public croquis:string="";
        // moyenne des notes des clients
    public note!:number;


    public get idOffre() : number {
        return this.id;
    } 
    public set idOffre(id : number) {
        this.id = id;
    }
    public get croquisOffre() : string {
        return this.croquis;
    } 
    public set croquisOffre(urlCroquis : string) {
        this.croquis = urlCroquis;
    }
    

    constructor(type_bien:string, adresse:string, ville:string, prix:number, surface:number
        , nb_piece:number, meuble:boolean, achat:boolean , exterieur:boolean, croquis:string)
    {
        //Enlever id car auto-generé -> voir por formulaire incomplet
        //this.id = id;
        this.type_bien = type_bien;
        this.adresse = adresse;
        this.ville = ville;
        this.prix = prix;
        this.surface = surface;
        this.nb_piece = nb_piece;
        this.meuble = meuble;
        this.achat = achat;
        this.exterieur = exterieur;
        this.croquis = croquis;
        //Note donné par les clients
        //this.note = note;
    }
}



