import { Component, OnInit } from '@angular/core';
import { routes } from "../../app.routes";
import { SideBareElements, RoutesComponent } from "../../routes/routes.component";
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
})
export class SideBarComponent implements OnInit {

  constructor() {

   }

  sides:RoutesComponent = new RoutesComponent();
  element:any = this.sides.GetSideBareRoutes("gestionnaire");
  espace:String = "Espace Enseignant";
  pohtoUrl :String = localStorage.getItem("userPhoto");
  userType :String = localStorage.getItem("userType");

  ngOnInit() {
    console.log(this.pohtoUrl);
      $.getScript('../../../assets/js/material-dashboard-angular.js');

  }


}
