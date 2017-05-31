import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";


@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  getUserType(user:string){
     return this.http.get("https://us-central1-prj2cssil.cloudfunctions.net/gettype?email="+user)
                    .map((res :any)=> {
                      return res._body;
                   });
  }

}
