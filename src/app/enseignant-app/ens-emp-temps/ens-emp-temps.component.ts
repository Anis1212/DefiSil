import { Component, OnInit } from '@angular/core';
import {Response} from "@angular/http";

import {EnsServiceService} from "../../services/ens-service.service"

@Component({
  selector: 'app-ens-emp-temps',
  templateUrl: './ens-emp-temps.component.html',
  styleUrls: ['./ens-emp-temps.component.css']
})
export class EnsEmpTempsComponent implements OnInit {

  private seances = [];

  constructor(private ens_service : EnsServiceService) {
    this.ens_service.getSeancesEMP("m_mostefai").subscribe(
      (data : Response) => {this.seances = data.json();}
    );
  }

  ngOnInit() {


  }

}
