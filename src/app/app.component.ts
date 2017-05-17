import {Component, AfterViewInit, OnInit} from '@angular/core';
import * as $ from 'jquery';
@Component({


  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  menuState:string = 'toggled';
  
  constructor() { }

  ngOnInit() {
        $.getScript('../assets/js/material-dashboard.js');
        $.getScript('../assets/js/initMenu.js');
  }

  //Cette méthode s'occupe de l'affichage ou non du menu lattéral
  toggleMenu() {
    if (this.menuState === 'toggled'){
      this.menuState = 'notToggled';
    }else{
      this.menuState = 'toggled';
    }
  }

  jQuery: any;
  ngAfterViewInit(){
           jQuery(document).ready(function(){
    //            jQuery('#betterweather').betterWeather({
    //     apiKey    : '...',
    //     location  : '51.5171,-0.1062'
    // });
           });
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

