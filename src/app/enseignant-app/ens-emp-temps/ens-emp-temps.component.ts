import { Component, OnInit } from '@angular/core';
import {Response} from "@angular/http";

import {EnsServiceService} from "../../services/ens-service.service"

@Component({
  selector: 'app-ens-emp-temps',
  templateUrl: './ens-emp-temps.component.html',
  styleUrls: ['./ens-emp-temps.component.css']
})
export class EnsEmpTempsComponent implements OnInit {

  private ens_email="k_chebieb@esi.dz";
  private jours = ["Dimanche","Lundi", "Mardi", "Mercredi", "Jeudi"];
  private emploieJour =[];

  constructor(private ens_service : EnsServiceService) {}

  ngOnInit() {
    this.jours.forEach(jour => this.ens_service.getEnsEmploieTemps(this.ens_email, jour)
      .subscribe(
        (data) => {
          if (data.json()[0] != null){
            this.emploieJour[jour] = this.ens_service.json2array(data.json()[0]);
          }else {
            this.emploieJour[jour] = data.json()[0];
          }
        }
      ));
  }
}
