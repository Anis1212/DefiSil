import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-groupe',
  templateUrl: './add-groupe.component.html',
  styleUrls: ['./add-groupe.component.css']
})
export class AddGroupeComponent {

   selectedRow : Number;
    setClickedRow : Function;

    groupes : [{
        nomGroupe: string
       
    }];

    constructor(){

        this.groupes = [
          { nomGroupe : "Groupe 1"},
          { nomGroupe : "Groupe 2"},
          { nomGroupe : "Groupe 3"},
          { nomGroupe : "Groupe 4"},
         
       
       
        ];


        this.setClickedRow = function(index){
            this.selectedRow = index;
        }
    };
};