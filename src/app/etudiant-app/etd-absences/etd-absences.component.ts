import { Component, OnInit } from '@angular/core';
import { EtdAbsenceService } from "./etd-absence.service";
import { METADATA } from "../METADATA";

@Component({
  selector: 'app-etd-absences',
  templateUrl: './etd-absences.component.html',
  styleUrls: ['./etd-absences.component.css']
})
export class EtdAbsencesComponent implements OnInit {
result = [];
hide:string = "block";
selectedModule:string;
userName:String = localStorage.getItem("userEmail");
modules = [
            {"name":"MAGIL"},
            {"name":"ALOG"},
            {"name":"IHM"}
          ];

  constructor(public etdAbsenceService:EtdAbsenceService) { }

  ngOnInit() {
     this.etdAbsenceService.getAbs(this.userName,"&module="+this.modules[0].name)
         .subscribe(
             data => this.result = data
         );
  }


    selectModule($event){
        this.selectedModule = $event.index;
        this.etdAbsenceService.getAbs(this.userName,"&module="+this.modules[this.selectedModule].name)
         .subscribe(
             data => this.result = data
         );

    }

    validerJust(){

    }

}
