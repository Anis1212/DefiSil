import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-gest-emp-temps',
  templateUrl: './gest-emp-temps.component.html',
  styleUrls: ['./gest-emp-temps.component.css']
})
export class GestEmpTempsComponent implements OnInit {

 

  stateCtrl: FormControl;
  filteredStates: any
  states = [
    'BDA',
    'COMPIL',
    'ANAD',
    'OUTILS',
    'ALOG',
    'QLOG',
    'TDM2',
  ];

    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};

    dropdownListCreno = [];
    selectedItemsCreno = [];
    dropdownSettingsCreno = {};


    food: any[];
    foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
    
     constructor() { 
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterStates(name));}
        
         filterStates(val: string) {
    return val ? this.states.filter(s => new RegExp(`^${val}`, 'gi').test(s))
               : this.states;
  }

   ngOnInit(){

        this.dropdownList = [
                              {"id":1,"itemName":"Groupe1"},
                              {"id":2,"itemName":"Groupe2"},
                              {"id":3,"itemName":"Groupe3"},
                              {"id":4,"itemName":"Groupe4"},
                              {"id":5,"itemName":"Groupe5"},
                              {"id":6,"itemName":"Groupe6"},
                              {"id":7,"itemName":"Groupe7"},
                              {"id":8,"itemName":"Groupe8"}                            
                            ];

        this.dropdownListCreno = [
                              {"id":1,"itemName":"Séance1"},
                              {"id":2,"itemName":"Séance2"},
                              {"id":3,"itemName":"Séance3"},
                              {"id":4,"itemName":"Séance4"},
                              {"id":5,"itemName":"Séance5"},
                              {"id":6,"itemName":"Séance6"},
                              {"id":7,"itemName":"Séance7"},
                              {"id":8,"itemName":"Séance8"}                            
                            ];
        this.selectedItems = [
                               // {"id":2,"itemName":"Groupe3"},
                            ];

          this.selectedItemsCreno = [
                               // {"id":2,"itemName":"Séance8"},
                            ];

        this.dropdownSettings = { 
                                  singleSelection: false, 
                                  text:"Groupes",
                                  selectAllText:'Sélectionner tous',
                                  unSelectAllText:'Déselectionner tous',
                                  // enableSearchFilter: true
                                };  


        this.dropdownSettingsCreno = { 
                                  singleSelection: false, 
                                  text:"Créneaux horaires",
                                  selectAllText:'Sélectionner tous',
                                  unSelectAllText:'Déselectionner tous',
                                  // enableSearchFilter: true
                                };                                  
    }
    onItemSelect(item){
        console.log('Selected Item:');
        console.log(item);
    }
    OnItemDeSelect(item){
        console.log('De-Selected Item:');
        console.log(item);
    }

}
