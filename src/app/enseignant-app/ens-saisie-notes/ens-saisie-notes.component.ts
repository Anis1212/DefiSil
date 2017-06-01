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

  private ens_email = localStorage.getItem("userEmail");
  private anneeSlct;
  private specialiteSlct;
  private moduleSlct;
  private evaluationSlct;
  private groupeSlct;
  private etdSlct;
  private id;
  private note;

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
  private dataChild = [];

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
            this.specialites = this.ens_service.json2array(data.json().specialite);
          }else{
            this.specialites = [];
            this.specialites.push(data.json().specialite);
          }
        }
    );
  }

  onChangeGroupe(groupe){
    this.groupeSlct = groupe['value'];
    this.specialiteSlct = groupe['value'];
  }

  onChangeModule(moduleCode){
    this.evaluations = [];
    this.moduleSlct = moduleCode['value'];
    this.ens_service.getGroupes(this.moduleSlct)
      .subscribe(
        (data) => {
          this.groupes = data.json();
          console.log(data.json());
          this.ens_service.getEvalModule(this.moduleSlct)
            .subscribe(
              (data : Response) => {
                this.evaluations=data.json();
                console.log(data.json());
                this.ens_service.transferModuleSaisieNotes(this.moduleSlct);
                this.ens_service.transferEvalSaisieNotes(this.evaluations);
                //this.dataChild = this.evaluations;
              }
            );
        }
      );
  }

  onChangeEvaluation(evaluation){
    this.evaluationSlct = evaluation['value'];
  }

  getListeEtudiants(){
    console.log(this.groupeSlct);
    this.ens_service.getListeEtudiants(this.groupeSlct)
      .subscribe(
        (data : Response) => {
          this.listeEtudiants = data.json();
          console.log(data.json());
        }
      )
  }

  getNotesEtudiants(){
    this.ens_service.getNotesEtudiants(this.specialiteSlct, this.moduleSlct, this.evaluationSlct)
      .subscribe(
        (data : Response) => {
          if (data.json() != null) {
            console.log("success", this.ens_service.json2array(data.json()[0]));
            this.notesEtudiants = this.ens_service.json2array(data.json()[0]);
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
        console.log("anis", data);
        // data[0].modules.splice(0,1);
        this.modules = data[0].modules;
        console.log(this.modules);
      }
    );
  }

  modifierNote(id, email : any){
    this.id = id;
    this.etdSlct = email;
    console.log(email);
  }

  valider(note){
    //this.notesEtudiants[this.id].valeur = note;
    let ok = true;
    this.notesEtudiants.forEach(etd =>{
      if(etd.valeur > 20){
        ok = false;
      }
    });
    console.log([this.notesEtudiants[this.id]]);
    console.log(JSON.stringify(this.notesEtudiants));
    if(ok == true){
      let a = [this.notesEtudiants[this.id]];
      this.ens_service.setNotes(this.notesEtudiants, this.moduleSlct, this.evaluationSlct, this.specialiteSlct, this.groupeSlct)
        .subscribe((data) => {
          console.log(data);
        });
    }

  }

}
