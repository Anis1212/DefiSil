import { Component, OnInit } from '@angular/core';
import { EtdProfileService } from "./etd-profile.service";

@Component({
  selector: 'app-etd-profile',
  templateUrl: './etd-profile.component.html',
  styleUrls: ['./etd-profile.component.css']
})
export class EtdProfileComponent implements OnInit {
  result = {};

  userName:string = "dr_benounnas@esi.dz";
  constructor(public etdProfileService:EtdProfileService) { }


    ngOnInit(){
        this.etdProfileService.getEtudiant(this.userName)
         .subscribe(
             data => this.result = data[0]);

    }

}
