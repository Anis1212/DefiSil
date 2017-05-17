import { Component, OnInit } from '@angular/core';
import { EtdNotesService } from "./etd-notes.service";

@Component({
  selector: 'app-etd-notes',
  templateUrl: './etd-notes.component.html',
  styleUrls: ['./etd-notes.component.css']
})

export class EtdNotesComponent implements OnInit {
result = [];
selectedModule:string;
userName:string = "dr_benounnas@esi.dz";
modules = [
            {"name":"MAGIL"},
            {"name":"TICO"}
          ];


    constructor(public etdNotesService:EtdNotesService){}

    ngOnInit(){
         this.etdNotesService.getNotes("",this.userName)
         .subscribe(
             data => this.result = data
         );
    }

selectModule(newValue){
        console.log(newValue.value);
        this.selectedModule = newValue.value;
        this.etdNotesService.getNotes("&module="+this.selectedModule,this.userName)
         .subscribe(
             data => this.result = data
         );

    }

}

