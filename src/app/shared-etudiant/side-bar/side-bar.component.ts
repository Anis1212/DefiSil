import { Component, OnInit } from '@angular/core';
import { routes } from "../../app.routes";
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
})
export class SideBarComponent implements OnInit {

  constructor() { }

    ngOnInit() {
        $.getScript('../../../assets/js/material-dashboard-angular.js');
    }

}
