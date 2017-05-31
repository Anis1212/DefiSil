import { Component, OnInit } from '@angular/core';
import {EnsServiceService} from "../../services/ens-service.service";

@Component({
  selector: 'app-ens-home',
  templateUrl: './ens-home.component.html',
  styleUrls: ['./ens-home.component.css']
})
export class EnsHomeComponent implements OnInit {

  private ens_email=localStorage.getItem("userEmail");
  private jours = ["Dimanche","Lundi", "Mardi", "Mercredi", "Jeudi"];
  private emploieJour =[];
  private rendezVous;

  constructor(private ens_service : EnsServiceService) {}


  ngOnInit() {
    /**
     * Récupère l'emploie du temps de l'enseignant de chaque jour
     */
    this.jours.forEach(jour => this.ens_service.getEnsEmploieTemps(this.ens_email, jour)
      .subscribe(
        (data) => {
          var creneaux;
          if (data.json()[0]!=null){
            this.emploieJour[jour] = data.json()[0];
            creneaux = this.ens_service.json2array(data.json()[0].creneaux);
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
          this.emploieJour[jour]= this.ens_service.json2array([this.emploieJour[jour]]);
          if (this.emploieJour[jour][0] != null){
            var groupesModule = this.ens_service.json2array(this.emploieJour[jour][0].groupes);
            this.emploieJour[jour][0].groupes = '';
            groupesModule.forEach(groupe => this.emploieJour[jour][0].groupes+= groupe+' ');
          }
        }
      ));

    this.ens_service.getRendezVous(this.ens_email)
      .subscribe(
        (data) => {
          console.log(data.json());
          this.rendezVous = data.json();
        }
      )
  }
}
