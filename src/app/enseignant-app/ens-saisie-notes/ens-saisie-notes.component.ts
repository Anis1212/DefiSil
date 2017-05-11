import {Component, OnInit, Output} from '@angular/core';
import {MdDialog} from '@angular/material';
import {Response} from "@angular/http";

import {EnsServiceService} from "../../services/ens-service.service";

@Component({
  selector: 'app-ens-saisie-notes',
  templateUrl: './ens-saisie-notes.component.html',
  styleUrls: ['./ens-saisie-notes.component.css']
})
export class EnsSaisieNotesComponent implements OnInit {

  private ens_email ="k_chebieb@esi.dz";
  private anneeSlct;
  private specialiteSlct;
  private moduleSlct;
  private evaluationSlct;
  private groupeSlct;
  private etdSlct;
  value;

  private annees = [
    {value: 'a1', viewValue: '1CPI'},
    {value: 'a2', viewValue: '2CPI'},
    {value: 'a3', viewValue: '1CS'},
    {value: 'a4', viewValue: '2CS'},
    {value: 'a5', viewValue: '3CS'}
  ];
  private specialites = [];
  private groupes = [];
  private modules = [];
  private evaluations = ["TP", "CI", "EMD"];
  private notesEtudiants = [];
  private listeEtudiants = [];

  constructor(public dialog: MdDialog, private ens_service : EnsServiceService) {}

  onChangeAnnee(annee) {
    this.specialites = [];
    this.groupes =[];
    this.modules = [];
    this.evaluations = [];
    this.ens_service.getSpecialites(annee['value'])
      .subscribe(
        (data : Response) => {
          this.ens_service.getSpecialites(annee['value'])
            .subscribe(
              (data : Response) => {this.anneeSlct = data.json().code;}
          );
          if (Array.isArray(data.json().specialite)){
            this.specialites = this.json2array(data.json().specialite);
          }else{
            this.specialites = [];
            this.specialites.push(data.json().specialite);
          }
        }
    );
  }

  // onChangeSpecialite(specialite){
  //   this.groupes =[];
  //   this.modules = [];
  //   this.evaluations = [];
  //   this.specialiteSlct = specialite['value'];
  //   this.ens_service.getGroupes(this.anneeSlct, specialite['value'])
  //     .subscribe(
  //       (data : Response) => {
  //         this.groupes=[];
  //         for (let _i = 0; _i < data.json().length; _i++){
  //           if(data.json()[_i].specialite == specialite['value']){
  //             this.groupes.push(data.json()[_i]);
  //           }
  //         }
  //       }
  //     );
  // }

  onChangeGroupe(groupe){
    this.groupeSlct = groupe['value'];
  }

  onChangeModule(moduleCode){
    this.moduleSlct = moduleCode['value'];
    this.ens_service.getGroupes(moduleCode['value'])
      .subscribe(
        (data) => {
          this.groupes = data.json();
          console.log(data.json());
        }
      );
    /**********************************************/
    // this.evaluations = [];
    // this.moduleSlct = moduleCode['value'];
    // this.ens_service.getEval(this.anneeSlct, '1', this.specialiteSlct, moduleCode['value'])
    //   .subscribe(
    //     (data : Response) => {
    //       console.log(this.json2array(data.json()));
    //       this.evaluations = this.json2array(data.json());
    //     }
    //   )
  }

  onChangeEvaluation(evaluation){
    this.evaluationSlct = evaluation['value'];
  }

  getListeEtudiants(){
    console.log(this.groupeSlct);
    this.ens_service.getListEtudiants(this.groupeSlct)
      .subscribe(
        (data : Response) => {
          this.listeEtudiants = data.json();
          console.log(data.json());
        }
      )
  }

  getNotesEtudiants(){
    this.ens_service.getNotesEtudiants(this.anneeSlct, '1', this.specialiteSlct, this.moduleSlct, this.evaluationSlct)
      .subscribe(
        (data : Response) => {
          if (data.json() != null) {
            console.log("success", this.json2array(data.json()));
            this.notesEtudiants = this.json2array(data.json());
          } else {
            console.log("error");
            this.notesEtudiants=[];
          }
        }
      )
  }

  ngOnInit() {
    this.ens_service.getModules(this.ens_email).subscribe(
      (data : any) => {
        data[0].modules.splice(0,1);
        this.modules = data[0].modules;
        console.log(this.modules);
      }
    );
  }

  modifierNote(email : any){
    this.etdSlct = email;
    console.log(email);
  }

  /**
   *
   * @param json
   * @returns {Array}
   */
  json2array(json){
    var result = [];
    var keys = Object.keys(json);
    keys.forEach(function(key){
      result.push(json[key]);
    });
    return result;
  }

}
