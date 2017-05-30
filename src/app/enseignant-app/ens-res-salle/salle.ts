export class Salle{
    nom:  String;
    type: String;
    etat: String;
    creneaux : Array<String> = new Array<String>();

    constructor(nom:String,type:String,etat:String,creneaux:Array<String>){
         this.nom=nom;
         this.type=type;
         this.etat=etat;
         this.creneaux = new Array<String>();
         var index:String = '1';
         let bool: boolean = false;
         while(Number(index)<=7){
            for(let creneau in creneaux) {
             if(creneau.substring(1,2) == index){
                 this.creneaux.push("Res");
                 bool = true;
             }
         }
         if(bool=== false) this.creneaux.push("NonRes");
         else bool = false;
         index = String(Number(index) + 1);
    }

}

    public getCreneaux():Array<String>{
        return this.creneaux;
    }

}