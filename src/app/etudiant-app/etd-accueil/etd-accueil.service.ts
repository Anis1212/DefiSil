import { Injectable } from '@angular/core';
import { Http, Response }  from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EtdAccueilService {

  constructor(private http: Http) { }

        public getEmplois(jour:String){
               return this.http.get("https://us-central1-prj2cssil.cloudfunctions.net/getEmploiTemps?jour="+jour+"&annee=2CS&groupe=SIL1")
                    .map((res:Response)=> res.json());
        }


}
