import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from "@angular/material";

@Component({
  selector: 'app-etd-notification',
  templateUrl: './etd-notification.component.html',
  styleUrls: ['./etd-notification.component.css']
})
export class EtdNotificationComponent{

    constructor(public dialogRef: MdDialogRef<EtdNotificationComponent>) {}

}