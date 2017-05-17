import { Injectable } from '@angular/core';
import { Http, Response }  from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EtdRendezVousService {

  constructor(private http: Http) { }


      AddRdv(enseignant:string,etudiant:string,motif:string)
{
    return this.http.get("https://us-central1-prj2cssil.cloudfunctions.net/addRendezVous?etudiant="+etudiant+"&enseignant="+enseignant+"&motif="+motif)
                    .map((res:Response)=> res.json());
}

    getRdv(etudiant:string,etat:string)
{
    return this.http.get("https://us-central1-prj2cssil.cloudfunctions.net/getRendezVous?etudiant="+etudiant+""+etat)
                    .map((res:Response)=> res.json());
}
}
