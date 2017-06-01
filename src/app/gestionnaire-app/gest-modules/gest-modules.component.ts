import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import {AddSectionComponent} from './GestSection/add-section/add-section.component'
import {AddGroupeComponent} from './GestGroupe/add-groupe/add-groupe.component'
import {GestServiceService} from "../../services/gest-service.service";


@Component({
  selector: 'app-gest-modules',
  templateUrl: './gest-modules.component.html',
  styleUrls: ['./gest-modules.component.css']
})
export class GestModulesComponent  {


  private sections;
  private groupes;
  private annee;
  private annees = ["1CPI", "2CPI", "1CS", "2CS", "3CS"];
  private etdNonAff;

  constructor(private gest_service : GestServiceService,public dialog: MdDialog) {}

  openGestSectionDialog() {
    this.dialog.open(AddSectionComponent);
  }

    openGestGroupeDialog() {
    this.dialog.open(AddGroupeComponent);
  }

  onChangeAnnee(annee){
    this.annee = annee['value'];
    this.gest_service.getSection(annee['value'])
      .subscribe(
        (data) =>{
          console.log(data.json());
          this.sections = data.json();
        }
      );
  }

  onChangeSpecialite(specialite){
    this.gest_service.getGroupes(this.annee, specialite['value'])
      .subscribe(
        (data) => {
          console.log(data.json());
          this.groupes = data.json();
          this.getEtdNonAff();
        }
      );
  }





    ngOnInit() {
      this.getEtdNonAff();
    }

  getEtdNonAff(){
    this.gest_service.getEtdNonAff(this.annee)
      .subscribe((data) =>{
        console.log(data.json());
        this.etdNonAff = data.json();
      });
  }

}

