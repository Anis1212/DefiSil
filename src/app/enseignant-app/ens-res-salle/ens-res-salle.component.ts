import { EnsResService } from './ens-res.service';
import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {EnsConfirmResComponent } from '../ens-confirm-res/ens-confirm-res.component';
import {EnsServiceService} from "../../services/ens-service.service";
import { GestModulesComponent } from '../../gestionnaire-app/gest-modules/gest-modules.component';
import { Salle } from './salle';



@Component({
  selector: 'app-ens-res-salle',
  templateUrl: './ens-res-salle.component.html',
  styleUrls: ['./ens-res-salle.component.css']
})
export class EnsResSalleComponent implements OnInit {
  private currentDate;
  private typesSalles = ['Cours', 'TD', 'TP'];
  private salles = [];
  private sallesRes: Array<Salle> ;
  private currentSalle: Salle;
  private currentType:String = "Cours";
  private currentCreneaux :String[]= [];
  private checkedValues :boolean[] = [false, false,false,false,false,false,false];
  constructor(public dialog: MdDialog, private ensResService :EnsResService, private ens_service:EnsServiceService) {}

  ngOnInit() {
  this.currentDate =this.fulldateTodate(new Date())
  this.ensResService.getSalles("Cours")
              .subscribe(
                data => {this.salles = data;}
              );
}

  openDialog1() {
    this.dialog.open(EnsConfirmResComponent)
   }


   selectSalle($event){
          this.ensResService.getSallesRes($event.tab.textLabel,this.currentDate)
          .subscribe(
            data => {
              this.currentSalle = new Salle($event.tab.textLabel,this.currentType,"",data);
              this.currentCreneaux = this.currentSalle.creneaux;
              console.log("New : "+this.currentCreneaux);
            }
          );
   }

   onChangeTypeSalle($event:any){
     this.currentType = $event.value;
      this.ensResService.getSalles($event.value)
              .subscribe(
                data => {this.salles = data;}
              );

   }
   onChangeDate($event:any){
     return this.currentDate = this.fulldateTodate($event.value);
   }

   fulldateTodate(fulldate){

      let jour:String;
      let mois:String;
      let annee:String = fulldate.getFullYear();

      if(fulldate.getDate() < 10) { jour = "0"+fulldate.getDate();}
      else {jour = fulldate.getDate();}

      if(fulldate.getMonth() < 10) { mois = "0"+(fulldate.getMonth()+1);}
      else {mois = (fulldate.getMonth()+1);}

      return annee +"-"+mois+"-"+jour;

   }

   addReservation(){

     var creneaux ={};

     for(let i=1;i<=this.checkedValues.length;i++){
            if(this.checkedValues[i-1] == true){
                  creneaux["c"+i] = i;
            }
     }

      this.ensResService.addResrveSalle(this.currentDate,
       {
          creneaux: creneaux,
          enseignant:'ait_aoudia@esi.dz',
          salle:this.currentSalle.nom
       }
     ).subscribe(
       (data) => {
         console.log(data.json());
       }
     );
   }


}

