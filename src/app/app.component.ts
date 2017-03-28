import { Component, AfterViewInit  } from '@angular/core';
import * as $ from 'jquery';
@Component({


  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jQuery: any;
  ngAfterViewInit(){
           jQuery(document).ready(function(){
    //            jQuery('#betterweather').betterWeather({
    //     apiKey    : '...',
    //     location  : '51.5171,-0.1062'
    // });
           });
     }
}

