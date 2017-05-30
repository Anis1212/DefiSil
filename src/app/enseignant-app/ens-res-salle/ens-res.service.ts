import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EnsResService {

  constructor(private http: Http) { }

        public getSalles(type:String){
               return this.http.get("https://us-central1-prj2cssil.cloudfunctions.net/getSalles?type="+type)
                    .map((res:Response)=> res.json());
        }


         public getSallesRes(salle:String, date:String){
               return this.http.get("https://us-central1-prj2cssil.cloudfunctions.net/getCreneauxNonDisponibles?salle="+salle+
               "&date="+date)
                    .map((res:Response)=> res.json());
        }

        public addResrveSalle(date:string,o:Object){
                let header = new Headers();
                header.append('Access-Control-Allow-Origin', '*');
                //let options = new RequestOptions({ headers: header });
                let body = o;
                console.log(o);
                return this.http.post("https://us-central1-prj2cssil.cloudfunctions.net/addReserveSalle?date="+
                                    date,body, { headers : header}
               );
        }

}
