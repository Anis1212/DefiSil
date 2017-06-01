import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-enseignant-app',
  templateUrl: './enseignant-app.component.html',
  styleUrls: ['./enseignant-app.component.css']
})
export class EnseignantAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
