import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";
import 'rxjs/add/operator/startWith';
import { RendezVous } from "../../Classes/Rendez-vous";
import { AjoutRdvService } from "./ajout-rdv.service";

@Component({
    selector: 'confirm-dialog',
   templateUrl: './ajout-rdv.component.html',
})
export class ConfirmDialog {
    
    public rdvEmited : RendezVous = {
        enseignant:"",
        motif:""
    };

    
    
    constructor(public dialogRef: MdDialogRef<ConfirmDialog>) {}

    

}