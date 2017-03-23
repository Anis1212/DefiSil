import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ens-saisie-abs',
  templateUrl: './ens-saisie-abs.component.html',
  styleUrls: ['./ens-saisie-abs.component.css']
})
export class EnsSaisieAbsComponent implements OnInit {

  constructor() { }
   annees = [
    {value: 'a1', viewValue: '1 CPI'},
    {value: 'a2', viewValue: '2 CPI'},
    {value: 'a3', viewValue: '1 CS'},
    {value: 'a4', viewValue: '2 CS'},
    {value: 'a5', viewValue: '3 CS'}
  ];

  ngOnInit() {
  }

}
