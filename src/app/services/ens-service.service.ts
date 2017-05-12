import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Injectable()
export class EnsServiceService {

  private result;
  private urlServeur = 'https://us-central1-prj2cssil.cloudfunctions.net/';
  private urlBDD = 'https://prj2cssil.firebaseio.com';


  constructor( private http : Http, private fire : AngularFire) {}

  /**
   * Récupère les spécialité d'une année
   * @param annee
   * @returns {Observable<Response>}
   */
  getSpecialites(annee : string){
    return this.http.get(this.urlBDD+'/annee_table/'+annee+'.json');
  }

  /**
   * récupère les groupe d'une année donnée d'une spécialité donnée
   * @param annee
   * @param specialite
   * @returns {Observable<Response>}
   */
  getGroupes(module : String){
    return this.http.get(this.urlServeur+'/getGroupesModule?module='+module);
  }

  /**
   * récopère les modules enseignés par un enseignant
   * @param email
   * @returns {FirebaseListObservable<any[]>}
   */
  getModules(email : String){
    return this.result =this.fire.database.list(this.urlBDD+'/enseignant_table',{
        query: {
          orderByChild: 'email',
          equalTo: email
        }
      });
  }

  /**
   * récupère l'ensebmle des évalation
   * @param annee
   * @param semestre
   * @param specialite
   * @param moduleCode
   * @returns {Observable<Response>}
   */
  getEval(annee : string, semestre : string, specialite : string ,moduleCode : string){
    return this.http.get(this.urlBDD+'/evaluation/'+annee+'/S'+semestre+'/'+specialite+'/'+moduleCode+'.json');
  }

  /**
   * récpère les notes de tous les étudiants d'une spécialité d'une année dans un module donné d'un semestre donné
   * @param annee
   * @param semestre
   * @param specialite
   * @param moduleCode
   * @param evaluation
   * @returns {Observable<Response>}
   */
  getNotesEtudiants(annee : string, semestre : string, specialite : string ,moduleCode : string, evaluation : string){
    return this.http.get(this.urlBDD+'/evaluation/'+annee+'/S'+semestre+'/'+specialite+'/'+moduleCode+'/'+evaluation+'/ligne_note.json');
  }

  /**
   * récupère la liste des étudiants d'un groupe donné
   * @param groupe
   * @returns {Observable<Response>}
   */
  getListeEtudiants(groupe : String){
    return this.http.get(this.urlServeur+'/listeEtudiantsDUngroupe?groupe='+groupe);
  }

  /**
   * récpère l'emploie du temps d'un enseignant
   * @param mail
   * @returns {Observable<Response>}
   */
  getSeancesEMP(mail : String){
    return this.http.get(this.urlBDD+'/ens_emp/'+mail);
  }

  /**
   * récupère les seances d'un module d'un enseignant
   * @param module
   * @param mail
   * @returns {Observable<Response>}
   */
  getSeances(module : String, mail : String){
    return this.http.get(this.urlServeur+'/SeancesDUnModule?module='+module+'&enseignant='+mail);
  }

  /**
   * récupère les groupes d'une séances donnée
   * @param idSeance
   * @returns {Observable<Response>}
   */
  getGroupesSeance(idSeance : String){
    return this.http.get(this.urlServeur+'/listeGroupesDuneSeance?id='+idSeance);
  }

  /**
   * ajoute les absents à la base de donnée
   * @param idSeance
   * @param etd_email
   * @param date
   * @param module
   * @returns {Observable<Response>}
   */
  setAbs(idSeance : String, etd_email :String, date : String, module : String){
    return this.http.get(this.urlServeur+'/addAbsence?idSeance='+idSeance+'&etudiant='+etd_email+'&date='+date+'&module='+module);
  }

  /**
   * récupère le nombre d'absences d'un étudiant
   * @param email
   * @param module
   * @returns {Observable<Response>}
   */
  getNbrAbsenceEtudiant(email : String, module : String){
    return this.http.get(this.urlServeur+'/AbsencesDUnEtudiant?etudiant='+email+'&module='+module);
  }

  /**
   * Récupère l'emploie du temps d'un jour donné, d'un enseignant donné
   * @param email
   * @param jour
   * @returns {Observable<Response>}
   */
  getEnsEmploieTemps(email : String, jour : String ){
    return this.http.get(this.urlServeur+'/getEmploiTemps?enseignant='+email+'&jour='+jour);
  }

  /**
   * Transforme un objet JSON en un tableau d'objets
   * @param json
   * @returns {Array}
   */
  json2array(json){
    var result = [];
    var keys = Object.keys(json);
    keys.forEach(function(key){
      result.push(json[key]);
    });
    return result;
  }
}
