import { LoginService } from './login.service';
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
  private user_type:string;
  private photoUrl : string;
  constructor(public firebaseService:FirebaseService, private router:Router, private loginService:LoginService) { }

  ngOnInit() {
  }

  login(){
      this.firebaseService.logInWithGoogle().then((data)=>{
        //this.router.navigate(['login']);
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
                this.photoUrl=auth.google.photoURL;
                console.log(this.photoUrl);
                localStorage.setItem("userPhoto",this.photoUrl);
                localStorage.setItem("userEmail",auth.google.email);
                console.log(localStorage.getItem("userEmail"));
                this.loginService.getUserType(localStorage.getItem("userEmail"))
                 .subscribe(res => {
                   this.user_type = res;
                   localStorage.setItem("userType",this.user_type);
                    this.router.navigate(['app-'+this.user_type]);
                 });
              }
      });
  }

  public getEmail(){
    return this.user_email;
  }

}
