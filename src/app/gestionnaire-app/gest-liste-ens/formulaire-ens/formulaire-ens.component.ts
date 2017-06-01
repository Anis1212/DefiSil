import { Component, OnInit } from '@angular/core';
import {GestServiceService} from "../../../services/gest-service.service";

@Component({
  selector: 'app-formulaire-ens',
  templateUrl: './formulaire-ens.component.html',
  styleUrls: ['./formulaire-ens.component.css']
})
export class FormulaireEnsComponent implements OnInit {

  private ens_nom : String;
  private ens_prenom : String;
  private ens_email : String;
  private ens_tel : String;
  private ens_nbrSalle : String;

  constructor(private gest_service : GestServiceService) { }


  ngOnInit() {
  }

  ajouterEns(){
    if(this.ens_nom != null && this.ens_prenom != null && this.ens_email != null && this.ens_nbrSalle != null){
      let ens = [{
        "email" : this.ens_email,
        "nom" : this.ens_nom,
        "prenom" : this.ens_prenom,
        "nbMaxSeances" : this.ens_nbrSalle+"",
        "numTel" : this.ens_tel+""
      }];

      this.gest_service.ajouterEns(ens)
        .subscribe(
          (data) => {
            console.log(data);
          }
        )
    }

  }

}
