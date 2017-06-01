import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import {FormulaireEnsComponent} from './formulaire-ens/formulaire-ens.component';
import {GestServiceService} from "../../services/gest-service.service";

@Component({
  selector: 'app-gest-liste-ens',
  templateUrl: './gest-liste-ens.component.html',
  styleUrls: ['./gest-liste-ens.component.css']
})
export class GestListeEnsComponent implements OnInit {

  private listeEnseignant;
  private modulesEns;

  constructor(private gest_service : GestServiceService, public dialog: MdDialog) {}

  openFormEns() {
    this.dialog.open(FormulaireEnsComponent);
  }

  afficherListeEns(){
    this.gest_service.getListEnseginant()
      .subscribe(
        (teachers) => {
          console.log(teachers);
          this.listeEnseignant = teachers;
        }
      );
  }

  ngOnInit() {
    this.afficherListeEns()
  }

  afficherModuleEns(indice){
    console.log(indice);
    console.log(this.listeEnseignant[indice].modules);
    this.modulesEns = this.listeEnseignant[indice].modules;
  }

  updateEns(email){

  }

  delEns(email){
    this.gest_service.delEns(email)
      .subscribe(
        (response) => {
          console.log(response);
          this.afficherListeEns();
        }
      );
  }

}
