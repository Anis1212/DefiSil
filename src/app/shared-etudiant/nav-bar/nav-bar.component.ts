import { Component, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import { FirebaseService } from "../../etudiant-app/firebaseServices/firebase.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loc : any;
  constructor(private firebaseService: FirebaseService, private router: Router) { }
        
  ngOnInit() {
    
  }

  logOut(){

     this.firebaseService.logOut();
     this.router.navigate(['/']);

  }

}
