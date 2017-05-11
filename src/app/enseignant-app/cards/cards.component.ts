import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {EnsServiceService} from "../../services/ens-service.service";


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  private jours = ["Dimanche","Lundi", "Mardi", "Mercredi", "Jeudi"];
  private emploieJour =[];
  private ens_email="k_chebieb@esi.dz";

  constructor(private ens_service : EnsServiceService) {}


  ngOnInit() {
    this.jours.forEach(jour => this.ens_service.getEnsEmploieTemps(this.ens_email, jour)
      .subscribe(
        (data) => {
          var creneaux;
          if (data.json()[0]!=null){
            this.emploieJour[jour] = data.json()[0];
            creneaux = this.json2array(data.json()[0].creneaux);
          }else {
            this.emploieJour[jour] = data.json()[0];
          }
          if((creneaux != null) && (this.emploieJour[jour] != null)){
            switch (creneaux[0]){
              case 1:
                this.emploieJour[jour].debut = "8:30h";
                break;
              case 2:
                this.emploieJour[jour].debut = "9:30h";
                break;
              case 3:
                this.emploieJour[jour].debut = "10:30h";
                break;
              case 4:
                this.emploieJour[jour].debut = "13:00h";
                break;
              case 5:
                this.emploieJour[jour].debut = "14:00h";
                break;
              case 6:
                this.emploieJour[jour].debut = "15:00h";
                break;
              case 7:
                this.emploieJour[jour].debut = "16:00h";
                break;
              default:
            }
            switch (creneaux[creneaux.length-1]){
              case 1:
                this.emploieJour[jour].fin = "9:30h";
                break;
              case 2:
                this.emploieJour[jour].fin = "10:30h";
                break;
              case 3:
                this.emploieJour[jour].fin = "11:30h";
                break;
              case 4:
                this.emploieJour[jour].fin = "14:00h";
                break;
              case 5:
                this.emploieJour[jour].fin = "15:00h";
                break;
              case 6:
                this.emploieJour[jour].fin = "16:00h";
                break;
              case 7:
                this.emploieJour[jour].fin = "17:00h";
                break;
              default:
            }
          }
          this.emploieJour[jour]= this.json2array([this.emploieJour[jour]]);
          if (this.emploieJour[jour][0] != null){
            var groupesModule = this.json2array(this.emploieJour[jour][0].groupes);
            this.emploieJour[jour][0].groupes = '';
            groupesModule.forEach(groupe => this.emploieJour[jour][0].groupes+= groupe+' ');
          }
        }

      ));

  }

  json2array(json){
    var result = [];
    var keys = Object.keys(json);
    keys.forEach(function(key){
      result.push(json[key]);
    });
    return result;
  }

}
