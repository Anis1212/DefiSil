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
  private currentDate;

  constructor(private ens_service : EnsServiceService) {

  }

  ngOnInit() {
    //Récuperer la date d'aujourd'hui
    this.currentDate = this.ens_service.getCurrentDate();

    this.ens_service.getModules(this.ens_email).subscribe(
      (data : any) => {
        data[0].modules.splice(0,1);
        this.modules = data[0].modules;
      }
    );
  }

  onChangeDate(date){
    this.jour = this.jours[date.value.getUTCDay()];
    this.date = date.value.getDate()+'/'+(date.value.getMonth()+1)+'/'+date.value.getFullYear();
  }

  /**
   * Récupère les séances d'un enseignant pour un module selectionné
   * @param moduleCode
   */
  onChangeModule(moduleCode){
    this.moduleSlct = moduleCode['value'];
    this.ens_service.getSeances(this.moduleSlct ,this.ens_email)
      .subscribe(
        (data : Response) => {
          this.seances = data.json();
        }
      );
  }

  /**
   * Récupère les groupes d'une séances donnée
   * @param seance
   */
  onChangeSeance(seance){
    this.seanceSlct = seance['value'];
    this.ens_service.getGroupesSeance(this.seanceSlct)
      .subscribe(
        (data : Response) => {
          this.groupes = data.json();
        }
      );

  }

  /**
   *
   * @param groupe
   */
  onChangeGroupe(groupe){
    this.groupeSlct = groupe['value'];
  }

  /**
   * Donne la liste des étudiants d'un groupe
   */
  getListeEtudiants(){
    this.ens_service.getListeEtudiants(this.groupeSlct)
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
        }
      );
  }

  /**
   * Envoie à la base de données les étudiants marqués absents
   */
  validerListeAbs(){
    this.listeEtudiantsAbs = this.listeEtudiants.filter(etudiant => etudiant.checked==true);
    this.listeEtudiantsAbs.forEach(etudiant => {this.ens_service.setAbs(this.seanceSlct, etudiant.email, this.date, this.moduleSlct)
      .subscribe(
        (date : Response) => {
          console.log(date);
          etudiant.nbrAbs = etudiant.nbrAbs + 1;
          console.log(etudiant);
          this.getListeEtudiants();
        }
      )});
  }
}
