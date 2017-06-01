import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";
import 'rxjs/add/operator/startWith';
import { RendezVous } from "../../Classes/Rendez-vous";
import { AjoutRdvService } from "./ajout-rdv.service";

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
    selector: 'confirm-dialog',
    templateUrl: './ajout-rdv.component.html',
})
export class ConfirmDialog {
    

     enseignants:any = [
    { 
        "name":"Ait Aoudia Samy",
        "email":"s_ait_aoudia@esi.dz"
    },
    { 
        "name":"Batata Sofiane",
        "email":"s_batata@esi.dz"
    },
    { 
        "name":"Ait Ali Yahia",
        "email":"m_ait_ali_yahia@esi.dz"
    },
    { 
        "name":"Rayan Aktouche",
        "email":"ds_aktouche@esi.dz"
    }
  ];

  stateCtrl: FormControl;
  filteredStates: any;

  rdvEmited:RendezVous = {
        Enseignant:"",
        Motif:""
    };


    
    
    constructor(public dialogRef: MdDialogRef<ConfirmDialog>) {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterStates(name));
    }

      filterStates(val: string) {
    return val ? this.enseignants.filter(s => new RegExp(`^${val}`, 'gi').test(s))
               : this.enseignants;
  }

    

}