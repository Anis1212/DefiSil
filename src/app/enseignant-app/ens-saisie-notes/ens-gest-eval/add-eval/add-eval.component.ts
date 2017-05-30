import { Component, OnInit } from '@angular/core';
import {EnsServiceService} from "../../../../services/ens-service.service";

@Component({
  selector: 'app-add-eval',
  templateUrl: './add-eval.component.html',
  styleUrls: ['./add-eval.component.css']
})
export class AddEvalComponent implements OnInit {

  private pereData;
  private evaluations = [];
  private evaluationNom = "";
  private evaluationPoids = "";
  constructor(private ens_service : EnsServiceService) { }

  ngOnInit() {
    this.pereData = this.ens_service.module;
    //console.log('module ', this.pereData[0]);
    this.ens_service.getEvalModule(this.pereData[0])
      .subscribe(
        (data) => {
          this.evaluations = data.json();
          //console.log(data.json());
        }
      );
  }

  ajouterEvaluation(nom, poids){
    console.log('ajout' ,this.pereData);
    console.log('ajout' ,nom, poids);
    this.ens_service.ajouterEvaluation('2CS', this.pereData[0] ,'SIL', '1', nom, poids)
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
  }

}
