import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";

import {DelEvalComponent} from "../ens-gest-eval/del-eval/del-eval.component";

@Component({
  selector: 'app-modif-note',
  templateUrl: './modif-note.component.html',
  styleUrls: ['./modif-note.component.css']
})
export class ModifNoteComponent implements OnInit {

  private email;
  private note;

  constructor(public dialogRef : MdDialogRef<DelEvalComponent>) {
    if(this.dialogRef.config.data.email!=null){
      this.email=this.dialogRef.config.data.email;
      this.note=this.dialogRef.config.data.valeur;
    }else{
      console.log('vide', this.dialogRef.config.data.evalList);
    }
  }

  ngOnInit() {
  }

}
