import { Component, OnInit } from '@angular/core';
import { AddEvalComponent } from '../ens-gest-eval/add-eval/add-eval.component';
import { DelEvalComponent } from '../ens-gest-eval/del-eval/del-eval.component';
import { ModifEvalComponent } from '../ens-gest-eval/modif-eval/modif-eval.component';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-ens-saisie-notes',
  templateUrl: './ens-saisie-notes.component.html',
  styleUrls: ['./ens-saisie-notes.component.css']
})
export class EnsSaisieNotesComponent implements OnInit {

  constructor(public dialog: MdDialog) {}

  openDialog1() {
    this.dialog.open(AddEvalComponent)
  }
  openDialog2() {
    this.dialog.open(DelEvalComponent)
  }
  openDialog3() {
    this.dialog.open(ModifEvalComponent )
  }

   annees = [
    {value: 'a1', viewValue: '1 CPI'},
    {value: 'a2', viewValue: '2 CPI'},
    {value: 'a3', viewValue: '1 CS'},
    {value: 'a4', viewValue: '2 CS'},
    {value: 'a5', viewValue: '3 CS'}
  ];

  ngOnInit() {
  }

}
