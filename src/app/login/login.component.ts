import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../etudiant-app/firebaseServices/firebase.service";
import { Router } from "@angular/router";
// import { METADATA } from "../etudiant-app/METADATA";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



 private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;

  constructor(public firebaseService:FirebaseService, private router:Router) { }

  ngOnInit() {
  }
  
  login(){
      this.firebaseService.logInWithGoogle().then((data)=>{
        this.router.navigate(['app-etudiant']);
      });
      this.firebaseService.af.auth.subscribe(
          (auth)=>{
                if (auth == null) {
                this.isLoggedIn = false;
                this.user_displayName = '';
                this.user_email = '';
                this.router.navigate(['login']);
              } 
              else {
                          this.isLoggedIn = true;
                          this.user_displayName = auth.google.displayName;
                          this.user_email = auth.google.email;
                          localStorage.setItem("userEmail",auth.google.email);
                          this.router.navigate(['app-etudiant']);
        }
      });
  }

  public getEmail(){
    return this.user_email;
  }

}
