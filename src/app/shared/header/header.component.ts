import {Component, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        width: '21%',
        overflow:'hidden'
      })),
      state('out', style({
        width: '3.5%',
        overflow:'hidden'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class HeaderComponent {
  menuState:string = 'out';

  //Cette méthode s'occupe de l'affichage ou non du menu lattéral
  toggleMenu() {
    if (this.menuState === 'out'){
      this.menuState = 'in';
    }else{
      this.menuState = 'out';
    }
  }
}
