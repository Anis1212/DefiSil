import { Component, OnInit } from '@angular/core';
import { RendezVous } from "../../Classes/Rendez-vous";
import { MdDialogRef } from "@angular/material";

@Component({
  selector: 'app-supp-rdv',
  templateUrl: './supp-rdv.component.html',
  styleUrls: ['./supp-rdv.component.css']
})

export class SuppRdvComponent {

    public rdvEmited : RendezVous = new RendezVous("","");
    
    
    constructor(public dialogRef: MdDialogRef<SuppRdvComponent>) {}

}


