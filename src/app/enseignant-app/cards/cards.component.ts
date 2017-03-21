import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() {
    
   }
   seance = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];


   notes = [
    {
      name: 'TATA Fella',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Ghiri Cilia',
      updated: new Date('1/18/16'),
    },
    {
      name: 'Aktouche Rayan',
      updated: new Date('1/18/16'),
    }
    ,{
      name: 'Soukeur Meryem',
      updated: new Date('1/18/16'),
    }
  ];

  ngOnInit() {
  }

}
