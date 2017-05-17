import { Component, OnInit } from '@angular/core';
import { RendezVous } from "../../Classes/Rendez-vous";
import { MdDialogRef } from "@angular/material";

@Component({
  selector: 'app-modif-rdv',
  templateUrl: './modif-rdv.component.html',
  styleUrls: ['./modif-rdv.component.css']
})
export class ModifRdvComponent  {
    
    public rdvEmited : RendezVous = new RendezVous("","");
    
    
    constructor(public dialogRef: MdDialogRef<ModifRdvComponent>) {}

}