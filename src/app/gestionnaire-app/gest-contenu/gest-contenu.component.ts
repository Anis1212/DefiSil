import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import {ListAffectationEnsComponent} from './list-affectation-ens/list-affectation-ens.component'
import {GestServiceService} from "../../services/gest-service.service";


@Component({
  selector: 'app-gest-contenu',
  templateUrl: './gest-contenu.component.html',
  styleUrls: ['./gest-contenu.component.css']
})
export class GestContenuComponent implements OnInit {
  private annee;
  private semestre;
  private listeModules;

  constructor(private gest_service : GestServiceService, public dialog: MdDialog) {}

  openAffEnsDialog() {
    this.dialog.open(ListAffectationEnsComponent);
  }

  ngOnInit() {
  }

  afficherModules(){
    this.gest_service.getListeModules(this.annee, this.semestre)
      .subscribe(
        (module) => {
          console.log(module.json());
          this.listeModules = module.json();
        }
      );
  }

  onChangeAnnee(annee){
    console.log(annee);
    console.log(annee['value']);
    switch (annee['value']){
      case 1:
        this.annee = '1CPI';
        break;
      case 2:
        this.annee = '2CPI';
        break;
      case 3:
        this.annee = '1CS';
        break;
      case 4:
        this.annee = '2CS';
        break;
      case 5:
        this.annee = '3CS';
        break;
      default:
        break;
    }
    console.log(this.annee);
    console.log(this.semestre);
  }

}
