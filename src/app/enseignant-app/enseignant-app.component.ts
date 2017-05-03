import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enseignant-app',
  templateUrl: './enseignant-app.component.html',
  styleUrls: ['./enseignant-app.component.css']
})
export class EnseignantAppComponent implements OnInit {

  // menuState:string = 'toggled';

  constructor() { }

  ngOnInit() {
  }

  //Cette méthode s'occupe de l'affichage ou non du menu lattéral
  // toggleMenu() {
  //   if (this.menuState === 'toggled'){
  //     this.menuState = 'notToggled';
  //   }else{
  //     this.menuState = 'toggled';
  //   }
  // }
}
