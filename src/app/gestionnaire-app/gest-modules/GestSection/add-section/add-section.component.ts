import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.css']
})
export class AddSectionComponent  {

    selectedRow : Number;
    setClickedRow : Function;

    sections : [{
        nomSection: string
       
    }];

    constructor(){

        this.sections = [
          { nomSection : "section A"},
          { nomSection : "section B"},
          { nomSection : "section C"},
          { nomSection : "section D"},
       
       
        ];


        this.setClickedRow = function(index){
            this.selectedRow = index;
        }
    };
};
