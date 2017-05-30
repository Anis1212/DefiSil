import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class EtdRendezVousService {

  constructor(private http: Http) { }


AddRdv(o:Object)
{
    let headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
    let options = new RequestOptions({ headers: headers });
    console.log(o);
    return this.http.post("https://us-central1-prj2cssil.cloudfunctions.net/gestRendezVous?action=add",o, options);
}

    getRdv(etudiant:String,etat:string)
{
    return this.http.get("https://us-central1-prj2cssil.cloudfunctions.net/getRendezVous?etudiant="+etudiant+""+etat)
                      .map((res:Response)=> res.json());
}

private extractData(res: Response) {
  let body = res.json();
  return body.data || { };
}

private handleError (error: Response | any) {
  // In a real world app, you might use a remote logging infrastructure
  let errMsg: string;
  if (error instanceof Response) {
    const body = error.json() || '';
    const err = body.error || JSON.stringify(body);
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  console.error(errMsg);
  return Observable.throw(errMsg);
}
}
