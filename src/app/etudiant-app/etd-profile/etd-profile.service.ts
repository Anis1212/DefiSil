import { Injectable } from '@angular/core';
import { Http, Response }  from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EtdProfileService {

  constructor(private http: Http) { }

getEtudiant(etudiant:string)
{
    return this.http.get("https://us-central1-prj2cssil.cloudfunctions.net/infosEtudiant?email="+etudiant)
                    .map((res:Response)=> res.json());
}

}
