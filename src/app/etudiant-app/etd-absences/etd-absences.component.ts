import { Component, OnInit } from '@angular/core';
import { EtdAbsenceService } from "./etd-absence.service";

@Component({
  selector: 'app-etd-absences',
  templateUrl: './etd-absences.component.html',
  styleUrls: ['./etd-absences.component.css']
})
export class EtdAbsencesComponent implements OnInit {
result = [];
hide:string = "block";
selectedModule:string;
userName:string = "dr_benounnas@esi.dz";
modules = [
            {"name":"MAGIL"},
            {"name":"ALOG"}
          ];

  constructor(public etdAbsenceService:EtdAbsenceService) { }

  ngOnInit() {
  }

  selectModule(newValue:any){
        console.log(newValue.value);
        this.selectedModule = newValue.value;
        this.etdAbsenceService.getAbs(this.userName,"&module="+this.selectedModule)
         .subscribe(data => this.result = data);
    }

    validerJust(){

    }

}
