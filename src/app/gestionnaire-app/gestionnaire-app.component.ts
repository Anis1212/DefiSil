import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestionnaire-app',
  templateUrl: './gestionnaire-app.component.html',
  styleUrls: ['./gestionnaire-app.component.css']
})
export class GestionnaireAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


       public isMaps(path){
        if(path == window.location.pathname){
            return false;
        }
        else {
            return true;
        }
    }


}