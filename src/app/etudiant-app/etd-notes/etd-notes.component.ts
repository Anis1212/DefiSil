import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { EtdNotesService } from "./etd-notes.service";
import { METADATA } from "../METADATA";


export class ModuleEvaluation{
      module:String;
      moyenne:number;

      constructor(module:String, moyenne:number){
          this.module = module;
          this.moyenne = moyenne;
      }
}

@Component({
  selector: 'app-etd-notes',
  templateUrl: './etd-notes.component.html',
  styleUrls: ['./etd-notes.component.css']
})

export class EtdNotesComponent implements OnInit {
result = [];
selectedModule:string;
moyenne:number;
//@Input() moduleToEmit :ModuleEvaluation;
//@Output() ModuleEmitEvent: EventEmitter<ModuleEvaluation> = new EventEmitter();

userName:String = localStorage.getItem("userEmail");
modules = [
            {"name":"MAGIL"},
            {"name":"TICO"},
            {"name":"ALOG"}
          ];


    constructor(public etdNotesService:EtdNotesService){}

    ngOnInit(){
         this.etdNotesService.getNotes("&module="+this.modules[0].name,this.userName)
         .subscribe(
             data => {
                 this.result = data;
                 this.calculeMoyenne()
                }
         );
    }

selectModule($event){
        this.selectedModule = $event.index;
        this.etdNotesService.getNotes("&module="+this.modules[this.selectedModule].name,this.userName)
         .subscribe(
             data => {
                 this.result = data;
                 this.calculeMoyenne()
                }
         );

    }

 calculeMoyenne(){
     let nbEvaluation = this.result.length;
     this.moyenne = 0;
     for(let i=0;i<nbEvaluation;i++){
           this.moyenne = this.moyenne + (this.result[i].note*(this.result[i].coefficient/nbEvaluation))
     }
     //this.moduleToEmit = new ModuleEvaluation(this.selectedModule,this.moyenne);


 }   

}

