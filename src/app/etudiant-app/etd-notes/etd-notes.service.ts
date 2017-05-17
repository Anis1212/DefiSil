import { Injectable } from '@angular/core';
import { Http, Response }  from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EtdNotesService {

  constructor(private http: Http) { }

getNotes(selectedModule:string,userName:string)
{
    return this.http.get("https://us-central1-prj2cssil.cloudfunctions.net/noteEtudiant?email="+userName+""+selectedModule)
                    .map((res:Response)=> res.json());
}

}
