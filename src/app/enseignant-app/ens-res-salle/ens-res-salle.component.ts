import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {EnsConfirmResComponent } from '../ens-confirm-res/ens-confirm-res.component';
import {EnsServiceService} from "../../services/ens-service.service";



@Component({
  selector: 'app-ens-res-salle',
  templateUrl: './ens-res-salle.component.html',
  styleUrls: ['./ens-res-salle.component.css']
})
export class EnsResSalleComponent implements OnInit {
  private currentDate;

  constructor(public dialog: MdDialog, private ens_service : EnsServiceService) {}

  ngOnInit() {
  this.currentDate = this.ens_service.getCurrentDate();
}

  openDialog1() {
    this.dialog.open(EnsConfirmResComponent)
   }

}

