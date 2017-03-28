import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-del-eval',
  templateUrl: './del-eval.component.html',
  styleUrls: ['./del-eval.component.css']
})
export class DelEvalComponent implements OnInit {

  private evalList = [];

  constructor(public dialogRef : MdDialogRef<DelEvalComponent>) {
    console.log('data', this.dialogRef.config.data);
    this.evalList = this.dialogRef.config.data.evalList;
  }

  ngOnInit() {
  }

}
