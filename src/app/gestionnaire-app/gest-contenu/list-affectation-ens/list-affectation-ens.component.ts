import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';
import {GestServiceService} from "../../../services/gest-service.service";

@Component({
  selector: 'app-list-affectation-ens',
  templateUrl: './list-affectation-ens.component.html',
  styleUrls: ['./list-affectation-ens.component.css']
})
export class ListAffectationEnsComponent implements OnInit {

  private ensModuleAff = [];
  private module;
  private annee;
  private listeEns = [];
  private ensAffEmail = [];
  private specialite;

  constructor(private gest_service : GestServiceService, public dialogRef: MdDialogRef<ListAffectationEnsComponent>) {
    this.ensModuleAff = this.dialogRef.config.data.ensModule;
    this.module = this.dialogRef.config.data.module;
    this.annee = this.dialogRef.config.data.annee;
    this.specialite = this.dialogRef.config.data.specialite;
    if(this.ensModuleAff != null){
      this.ensModuleAff.forEach(ens => {
        ens.checked=false;
        this.ensAffEmail.push(ens.email);
      });
      console.log(this.ensModuleAff);
    }
    console.log('data', this.ensModuleAff);
    console.log('data', this.dialogRef.config.data);
    this.gest_service.getListEnseginant()
      .subscribe(
        (teachers) => {
          console.log(teachers);
          this.listeEns = teachers;
          this.listeEns.forEach(ens => {
            ens.checked = false;
          });
        }
      );
  }

  ngOnInit() {
  }

  affecterEns(){
    console.log("ENS", this.listeEns);
    this.listeEns.forEach(ens => {
      if (ens.checked == true){
        this.ensModuleAff.push(ens);
        this.ensAffEmail.push(ens.email);
        this.listeEns.splice(this.ensModuleAff.indexOf(this.ensModuleAff[this.ensModuleAff.length-1]),1);
        console.log("anis",ens);
      }
      console.log("EnsAff",this.ensModuleAff);
      console.log("emailAff",this.ensAffEmail);
    });
  }

  retirerEns(){
    this.ensModuleAff.forEach(ens => {
      if (ens.checked == true){
        ens.checked = false;
        this.listeEns.push(ens);
        this.ensAffEmail.splice(this.listeEns.indexOf(this.listeEns[this.listeEns.length-1].email), 1);
        this.ensModuleAff.splice(this.listeEns.indexOf(this.listeEns[this.listeEns.length-1]),1);
      }
    });
  }

  valider(){
    console.log(this.ensAffEmail);
    this.gest_service.affecterEnsModule(this.module, this.annee, this.specialite, {
      "enseignants" : this.ensAffEmail
    }).subscribe(
      (data) => {
        console.log(data.json());
      }
    );

  }

}
