import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Injectable()
export class EnsServiceService {

  result;
  data =[];

  constructor( private http : Http, private fire : AngularFire) {}

  getSpecialites(annee : string){
    return this.http.get('https://prj2cssil.firebaseio.com/annee_table/'+annee+'.json');
  }

  getGroupes(annee : string, specialite : string){
    return this.http.get('https://us-central1-prj2cssil.cloudfunctions.net/listeGroupes?annee='+annee+'&specialite='+specialite+'');
    // return this.result =this.fire.database.list('/groupes',{
    //   query: {
    //     orderByChild: 'annee',
    //     equalTo: annee
    //   }
    // });

    // return this.http.get('https://prj2cssil.firebaseio.com/annee_table/'+specialite+'.json');
  }

  getModules(annee : string, semestre : string, specialite : string){
    return this.http.get('https://us-central1-prj2cssil.cloudfunctions.net/listeModules?annee='+annee+'&semestre='+semestre+'&specialite='+specialite+'');
  }

  getEval(annee : string, semestre : string, specialite : string ,moduleCode : string){
    return this.http.get('https://prj2cssil.firebaseio.com/evaluation/'+annee+'/S'+semestre+'/'+specialite+'/'+moduleCode+'.json');
  }

  getNotesEtudiants(annee : string, semestre : string, specialite : string ,moduleCode : string, evaluation : string){
    return this.http.get('https://prj2cssil.firebaseio.com/evaluation/'+annee+'/S'+semestre+'/'+specialite+'/'+moduleCode+'/'+evaluation+'/ligne_note.json');
  }




}
