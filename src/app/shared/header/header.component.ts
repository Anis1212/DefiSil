import {Component, trigger, state, style, transition, animate, Output, EventEmitter} from '@angular/core';

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
  @Output() clicked = new EventEmitter<string>();
  menuState:string = 'toggled';

  //Cette méthode s'occupe de l'affichage ou non du menu lattéral
  toggleMenu() {
    if (this.menuState === 'toggled'){
      this.clicked.emit('');
      this.menuState = '';
    }else{
      this.clicked.emit('toggle');
      this.menuState = 'toggled';
    }
  }

  json2array(json){
    var result = [];
    var keys = Object.keys(json);
    keys.forEach(function(key){
      result.push(json[key]);
    });
    return result;
  }
}
