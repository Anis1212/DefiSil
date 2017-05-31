import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import {ListAffectationEnsComponent} from './list-affectation-ens/list-affectation-ens.component'
import {GestServiceService} from "../../services/gest-service.service";
declare var $:JQueryStatic;


@Component({
  selector: 'app-gest-contenu',
  templateUrl: './gest-contenu.component.html',
  styleUrls: ['./gest-contenu.component.css']
})
export class GestContenuComponent implements OnInit {
  private annee='';
  private semestre='';
  private specialite='';
  private specialites = ["SIT", "SIQ", "SIL"];
  private listeModules;

  private nomModule='';
  private codeModule='';
  private coeffModule='';
  private VHTD='';
  private VHC='';
  private ensModule = [];

  constructor(private gest_service : GestServiceService, public dialog: MdDialog) {}


  openAffEnsDialog() {
    this.dialog.open(ListAffectationEnsComponent, {
      data: {
        ensModule : this.ensModule,
        module : this.codeModule,
        annee : this.annee,
        specialite : this.specialite
      }
    });
  }

  ngOnInit() {
  }

  afficherModules(){
    this.gest_service.getListeModules(this.annee, this.semestre)
      .subscribe(
        (module) => {
          console.log(module.json());
          this.listeModules = module.json();
        }
      );
  }

  onChangeAnnee(annee){
    console.log(annee);
    console.log(annee['value']);
    switch (annee['value']){
      case 1:
        this.annee = '1CPI';
        break;
      case 2:
        this.annee = '2CPI';
        break;
      case 3:
        this.annee = '1CS';
        break;
      case 4:
        this.annee = '2CS';
        break;
      case 5:
        this.annee = '3CS';
        break;
      default:
        break;
    }
    console.log(this.annee);
    console.log(this.semestre);
    console.log(this.specialite);
  }

  supprimerModule(module, specialite){
    this.gest_service.delModule(module, this.annee, specialite)
      .subscribe(
        (data) =>{
          console.log(data);
          this.afficherModules();
        }
      );
  }

  afficherDetail(indiceModule){
    this.nomModule = this.listeModules[indiceModule].nom;
    this.codeModule = this.listeModules[indiceModule].code;
    this.coeffModule = this.listeModules[indiceModule].coefficient;
    this.specialite = this.listeModules[indiceModule].specialite;
    this.VHTD = this.listeModules[indiceModule].volumeTD;
    this.VHC = this.listeModules[indiceModule].volumeCours;
    //this.ensModule = this.listeModules[indiceModule].enseignants;

    this.ensModule = [];

    console.log(this.listeModules[indiceModule].enseignants);
    this.listeModules[indiceModule].enseignants.forEach(ens =>{
      this.gest_service.getInfoEns(ens)
        .subscribe(
          (data) => {
            console.log(data.json());
            this.ensModule.push(data.json());
            console.log(this.ensModule);
          });
    });

    $('div.form-group').removeClass('is-empty');
    console.log(this.listeModules);
  }

  initialiserChamps(){
    this.nomModule = '';
    this.codeModule = '';
    this.coeffModule = '';
    this.VHTD = '';
    this.VHC = '';
    this.ensModule = [];

    $('div.form-group').addClass('is-empty');

    console.log(this.listeModules);
  }

  ajouterModule(){
    let module = [{
      "nom" : this.nomModule,
      "code" : this.codeModule,
      "coefficient" : this.coeffModule+"",
      "semestre" : this.semestre+"",
      "specialite" : this.specialite,
      "volume cours" : this.VHC+"",
      "volume TD" : this.VHTD+""
    }];
    console.log(module);
    if(this.annee != '' && this.codeModule != '' && this.coeffModule != '' && this.semestre ){
      this.gest_service.addModule(module, this.annee)
        .subscribe(
          (data) => {
            console.log(data);
          });
    }
  }

}
