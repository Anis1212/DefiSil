import { Component, OnInit } from '@angular/core';
import { EtdAccueilService } from "./etd-accueil.service";


class EmploiTemps{
  creneau:number;
  module:String;
  enseignant:String;
  type:String;
  salle:String;

  constructor(creneau:number, module:String, enseignant:String,type:String, salle:String){
        this.creneau = creneau;
        this.module = module;
        this.enseignant = enseignant;
        this.type = type;
        this.salle = salle;
  }
} 

@Component({
  selector: 'app-etd-accueil',
  templateUrl: './etd-accueil.component.html',
  styleUrls: ['./etd-accueil.component.css']
})
export class EtdAccueilComponent implements OnInit{ 

  jours:Array<any> = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi"]; 
  emplois: Array<EmploiTemps>;
  result = [];
  leng:number = 0;
  seance:any = new Object();
  constructor(public etdAccueilService:EtdAccueilService) { }


  ngOnInit() {
     this.etdAccueilService.getEmplois('Dimanche')
         .subscribe(
             data => {
               this.result = data;
               for(let i=0;i<this.result.length;i++){
                      for(let j=0;j<Object.keys(this.result[i].creneaux).length;j++){
                            this.emplois.push(
                                new EmploiTemps(
                                       this.result[i].creneaux[Object.keys(this.result[i].creneaux)[j]],
                                       this.result[i].module,
                                       this.result[i].enseignant,
                                       this.result[i].type,
                                       this.result[i].salle
                            ));
                        }
                   };
                   this.emplois.sort(this.compare);
            });
    
  }

  selectJour($event: any){
       this.emplois = new Array<EmploiTemps>();
       this.result = [];
        this.etdAccueilService.getEmplois($event.tab.textLabel)
         .subscribe(
             data => {
               this.result = data;
               for(let i=0;i<this.result.length;i++){
                      for(let j=0;j<Object.keys(this.result[i].creneaux).length;j++){
                            this.emplois.push(
                                new EmploiTemps(
                                       this.result[i].creneaux[Object.keys(this.result[i].creneaux)[j]],
                                       this.result[i].module,
                                       this.result[i].enseignant,
                                       this.result[i].type,
                                       this.result[i].salle
                            ));
                        }
                   };
                   this.emplois.sort(this.compare);
            });
}


 compare(a,b) {
  if (a.creneau < b.creneau)
    return -1;
  if (a.creneau > b.creneau)
    return 1;
  return 0;
}


}
