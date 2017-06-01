import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";


@Injectable()
export class GestEmpTempsService {

    urlServeur = 'https://us-central1-prj2cssil2.cloudfunctions.net';

  constructor(private http: Http) { }


          getSectionSpecialite(annee:string){
                  return this.http.get(this.urlServeur+"/getSections?annee="+annee)
                    .map((res:Response)=> res.json());
          }


          getGroup2_3CS(annee:string,sectionSpec:string){
                  return this.http.get(this.urlServeur+"/groupesRiad?annee="+annee+"&specialite="+sectionSpec)
                    .map((res:Response)=> res.json());
          }

          getGroupCPI(annee:string,sectionSpec:string){
                  return this.http.get(this.urlServeur+"/groupesRiad?annee="+annee+"&section="+sectionSpec)
                    .map((res:Response)=> res.json());
          }

          addCreneau(day:string,obj){
               return this.http.post(this.urlServeur+"/addSeance?jour="+day,obj)
                .map((res:Response)=> res.json());
          }

}
