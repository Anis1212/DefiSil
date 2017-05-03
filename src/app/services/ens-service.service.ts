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

  // getModules(annee : string, semestre : string, specialite : string){
  //   return this.http.get('https://us-central1-prj2cssil.cloudfunctions.net/listeModules?annee='+annee+'&semestre='+semestre+'&specialite='+specialite+'');
  // }
  getModules(email : String){
    // return this.http.get('');
    return this.result =this.fire.database.list('https://prj2cssil.firebaseio.com/enseignant_table',{
        query: {
          orderByChild: 'email',
          equalTo: email
        }
      });
  }

  getEval(annee : string, semestre : string, specialite : string ,moduleCode : string){
    return this.http.get('https://prj2cssil.firebaseio.com/evaluation/'+annee+'/S'+semestre+'/'+specialite+'/'+moduleCode+'.json');
  }

  getNotesEtudiants(annee : string, semestre : string, specialite : string ,moduleCode : string, evaluation : string){
    return this.http.get('https://prj2cssil.firebaseio.com/evaluation/'+annee+'/S'+semestre+'/'+specialite+'/'+moduleCode+'/'+evaluation+'/ligne_note.json');
  }

  getListEtudiants(groupe : String){
    return this.http.get('https://us-central1-prj2cssil.cloudfunctions.net/listeEtudiantsDUngroupe?groupe='+groupe);
  }

  getSeancesEMP(mail : String){
    return this.http.get('https://prj2cssil.firebaseio.com/ens_emp/'+mail);
  }

  getSeances(module : String, mail : String){
    return this.http.get('https://us-central1-prj2cssil.cloudfunctions.net/SeancesDUnModule?module='+module+'&enseignant='+mail);
  }

  getGroupesSeance(idSeance : String){
    return this.http.get('https://us-central1-prj2cssil.cloudfunctions.net/listeGroupesDuneSeance?id='+idSeance);
  }

  setAbs(idSeance : String, etd_email :String, date : String, module : String){
    return this.http.get('https://us-central1-prj2cssil.cloudfunctions.net/addAbsence?idSeance='+idSeance+'&etudiant='+etd_email+'&date='+date+'&module='+module);
  }

  getNbrAbsenceEtudiant(email : String, module : String){
    return this.http.get('https://us-central1-prj2cssil.cloudfunctions.net/AbsencesDUnEtudiant?etudiant='+email+'&module='+module);
  }


}
