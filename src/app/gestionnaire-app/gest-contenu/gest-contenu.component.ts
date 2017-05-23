import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import {ListAffectationEnsComponent} from './list-affectation-ens/list-affectation-ens.component'


@Component({
  selector: 'app-gest-contenu',
  templateUrl: './gest-contenu.component.html',
  styleUrls: ['./gest-contenu.component.css']
})
export class GestContenuComponent implements OnInit {

  constructor(public dialog: MdDialog) {}

  openAffEnsDialog() {
    this.dialog.open(ListAffectationEnsComponent);
  }

  ngOnInit() {
  }

}
