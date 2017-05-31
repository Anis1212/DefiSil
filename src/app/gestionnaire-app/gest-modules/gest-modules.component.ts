import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import {AddSectionComponent} from './GestSection/add-section/add-section.component'
import {AddGroupeComponent} from './GestGroupe/add-groupe/add-groupe.component'


@Component({
  selector: 'app-gest-modules',
  templateUrl: './gest-modules.component.html',
  styleUrls: ['./gest-modules.component.css']
})
export class GestModulesComponent  {

  private annees = ["1CPI", "2CPI", "1CS", "2CS", "3CS"];

  constructor(public dialog: MdDialog) {}

  openGestSectionDialog() {
    this.dialog.open(AddSectionComponent);
  }

    openGestGroupeDialog() {
    this.dialog.open(AddGroupeComponent);
  }





    ngOnInit() {

    }

}
