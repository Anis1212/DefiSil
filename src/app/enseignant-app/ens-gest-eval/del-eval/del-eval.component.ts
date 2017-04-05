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
    if(this.dialogRef.config.data.evalList!=null){
      console.log('data', this.dialogRef.config.data.evallist);
      this.evalList = this.dialogRef.config.data.evalList;
    }else{
      console.log('vide', this.dialogRef.config.data.evalList);
      this.evalList=[];
    }
  }

  ngOnInit() {
  }

}
