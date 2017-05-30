import { Component, OnInit } from '@angular/core';
import { EtdProfileService } from "./etd-profile.service";
import { METADATA } from "../METADATA";
import { LoginComponent } from "../../login/login.component";

@Component({
  selector: 'app-etd-profile',
  templateUrl: './etd-profile.component.html',
  styleUrls: ['./etd-profile.component.css']
})
export class EtdProfileComponent implements OnInit {
  result = {};
  userName:String;

  constructor(public etdProfileService:EtdProfileService) { }


    ngOnInit(){
        this.userName = localStorage.getItem("userEmail");
        this.etdProfileService.getEtudiant(this.userName)
         .subscribe(
             data => this.result = data[0]);

    }

}
