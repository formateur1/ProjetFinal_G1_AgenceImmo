export class Question {

    public id!:number
    public contenu!:string
    public date!:Date
    public reponse!:string
    public traitement!:boolean
    
    public idG!:number
    public idC!:number

    constructor(contenu:string, idG:number, idC:number){
        this.contenu = contenu
        this.idG = idG
        this.idC = idC
    }


    public get Id(){
        return this.id
    }

    public get Contenu(){
        return this.contenu
    }

    public get Date(){
        return this.date
    }

    public get Reponse(){
        return this.reponse
    }

    public get Traitement(){
        return this.traitement
    }
}
