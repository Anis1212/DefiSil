import { Injectable } from '@angular/core';
import { Http, Response }  from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EtdAbsenceService {

  constructor(private http: Http) { }

getAbs(etudiant:string,modules:string)
{
    return this.http.get("https://us-central1-prj2cssil.cloudfunctions.net/AbsencesDUnEtudiant?etudiant="+etudiant+""+modules)
                    .map((res:Response)=> res.json());
}

}
