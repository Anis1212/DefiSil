import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {EnsConfirmResComponent } from '../ens-confirm-res/ens-confirm-res.component';



@Component({
  selector: 'app-ens-res-salle',
  templateUrl: './ens-res-salle.component.html',
  styleUrls: ['./ens-res-salle.component.css']
})
export class EnsResSalleComponent implements OnInit {

  constructor(public dialog: MdDialog) {}

  openDialog1() {
    this.dialog.open(EnsConfirmResComponent)
   }

  ngOnInit() {
  }

}

