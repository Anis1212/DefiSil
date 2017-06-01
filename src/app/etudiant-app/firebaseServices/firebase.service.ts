import { Inject, Injectable } from "@angular/core";
import { AngularFire,AuthProviders,AuthMethods } from "angularfire2";

@Injectable()
export class FirebaseService {


    constructor(public af:AngularFire) {}


    logInWithGoogle(){
      return this.af.auth.login({
        provider: AuthProviders.Google,
        method:AuthMethods.Popup
      });
    }

    logOut(){
      return this.af.auth.logout();
    }

}
