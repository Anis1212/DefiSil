import {Component, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(0, 0, 0)'
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
