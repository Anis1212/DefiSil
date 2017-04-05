import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {DelEvalComponent} from "../del-eval/del-eval.component";

@Component({
  selector: 'app-modif-eval',
  templateUrl: './modif-eval.component.html',
  styleUrls: ['./modif-eval.component.css']
})
export class ModifEvalComponent implements OnInit {

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
