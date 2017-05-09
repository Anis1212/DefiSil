import {Component, OnInit} from '@angular/core';
import {Response} from "@angular/http";

import {EnsServiceService} from "../../services/ens-service.service";

@Component({
  selector: 'app-ens-saisie-abs',
  templateUrl: './ens-saisie-abs.component.html',
  styleUrls: ['./ens-saisie-abs.component.css']
})
export class EnsSaisieAbsComponent implements OnInit {

  private moduleSlct;
  private seanceSlct;
  private groupeSlct;
  private jour;
  private date;
  private ens_email = 'k_chebieb@esi.dz';
  value;

  private jours = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi"
  ];
  private seances = [];
  private groupes = [];
  private modules = [];
  private listeEtudiants = [];
  private listeEtudiantsAbs = [];

  constructor(private ens_service : EnsServiceService) {

  }

  ngOnInit() {
    this.ens_service.getModules(this.ens_email).subscribe(
      (data : any) => {
        data[0].modules.splice(0,1);
        this.modules = data[0].modules;
        console.log(this.modules);
      }
    );
  }

  onChangeDate(date){
    console.log(date);
    this.jour = this.jours[date.value.getUTCDay()];
    this.date = date.value.getDate()+'/'+(date.value.getMonth()+1)+'/'+date.value.getFullYear();
    console.log(this.jour);
    console.log(this.date);
  }

  onChangeModule(moduleCode){
    this.moduleSlct = moduleCode['value'];
    this.ens_service.getSeances(this.moduleSlct ,this.ens_email)
      .subscribe(
        (data : Response) => {
          console.log(this.json2array(data.json()));
          this.seances = data.json();
        }
      );
  }

  onChangeSeance(seance){
    this.seanceSlct = seance['value'];
    console.log(this.seanceSlct);
    this.ens_service.getGroupesSeance(this.seanceSlct)
      .subscribe(
        (data : Response) => {
          console.log(data.json());
          this.groupes = data.json();
        }
      );

  }

  onChangeGroupe(groupe){
    this.groupeSlct = groupe['value'];
  }

  aff(){
    console.log(this.listeEtudiants);
  }

  getListeEtudiants(){
    this.ens_service.getListEtudiants(this.groupeSlct)
      .subscribe(
        (data : Response) => {
          this.listeEtudiants = data.json();
          this.listeEtudiants.forEach(etudiant => {etudiant.checked=false; console.log(etudiant)});
          this.listeEtudiants.forEach(etudiant => {this.ens_service.getNbrAbsenceEtudiant(etudiant.email, this.moduleSlct)
            .subscribe(
              (data : Response) => {
                etudiant.nbrAbs=data.json().length;
              })
          });
          console.log(this.listeEtudiants);
        }
      );
  }

  validerListeAbs(){
    this.listeEtudiantsAbs = this.listeEtudiants.filter(etudiant => etudiant.checked==true);
    console.log(this.listeEtudiantsAbs);
    this.listeEtudiantsAbs.forEach(etudiant => {this.ens_service.setAbs(this.seanceSlct, etudiant.email, this.date, this.moduleSlct)
      .subscribe(
        (date : Response) => {
          console.log(date);
          this.getListeEtudiants();
        }
      )});
  }

  refresh(){
    this.getListeEtudiants();
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
