import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";

@Injectable()
export class GestServiceService {

  constructor(private http : Http, private fire : AngularFire) { }
  private teachers :BehaviorSubject<any> = new BehaviorSubject([]);
  private urlServeur = 'https://us-central1-prj2cssil.cloudfunctions.net';
  private urlBDD = 'https://prj2cssil.firebaseio.com';


  ajouterEns(ens){
    return this.http.post(this.urlServeur+'/addEnseignants', ens)
      .map((res: Response) =>{
        //res = res.json();
        let values = this.teachers.getValue();
        values.push(ens[0]);
        console.log(ens[0]);
        this.teachers.next(values);
        console.log(this.teachers.value);
      })
      .catch((error:any) =>  {console.log(error); return "server error"});
  }

  getListEnseginant(){
     this.http.get(this.urlServeur+'/listeEnseignants')
      .map((res: Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error'))
      .subscribe((teachers) => this.teachers.next(teachers));
    return this.teachers;
  }

  delEns(email){
    return this.http.get(this.urlServeur+'/removeEnseignant?email='+email);
  }

  getListeModules(annee, semestre){
    return this.http.get(this.urlServeur+'/listeModules?annee='+annee+'&semestre='+semestre);
  }



}
