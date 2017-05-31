import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { GestEmpTempsService } from './gest-emp-temps.service';

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


    anneesScolaire = ['1CPI','2CPI','1CS','2CS','3CS'];
    sections = ['Section A','Section B','Section C','Section D'];
    specialite = ['SIL','SIQ','SIT'];



    annee:any;
    day : any;
    sectionsShow:any;
    groupsShow = [];
    creneauxadd = {}  ;
    groupadd = {};

    jours = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi'];

    
     constructor(private gestEmpTempsService:GestEmpTempsService) { 

            this.stateCtrl = new FormControl();
            this.filteredStates = this.stateCtrl.valueChanges
                  .startWith(null)
                  .map(name => this.filterStates(name));
      
    }
        
         filterStates(val: string) {
    return val ? this.states.filter(s => new RegExp(`^${val}`, 'gi').test(s))
               : this.states;
  }

   ngOnInit(){

        this.dropdownListCreno = [
                              {"id":"c1","itemName":"08:30-09:30"},
                              {"id":"c2","itemName":"09:35-10:35"},
                              {"id":"c3","itemName":"10:40-11:40"},
                              {"id":"c4","itemName":"13:00-14:00"},
                              {"id":"c5","itemName":"14:05-15:05"},
                              {"id":"c6","itemName":"15:10-16:10"},
                              {"id":"c7","itemName":"16:15-17:15"}                         
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
    onCreneauSelect(item){
        this.creneauxadd[item.id] = (item.id).substring(1,2);
        console.log('De-Selected Item:');
        console.log(item);
        console.log(this.creneauxadd);
    }

    onGroupSelect(item){
      if(this.annee == "2CS" || this.annee == "3CS"){
        this.groupadd["g"+item.name] = this.specialite+""+item.name;
      }else {
          this.groupadd["g"+item.name] = ""+item.name;
      }
        console.log('De-Selected Item:');
        console.log(item);
        console.log(this.groupadd);
    }

    OnItemDeSelect(item){
      
    }


    onChangeAnneeScolaire($event){
        this.annee = $event.value;
        this.gestEmpTempsService.getSectionSpecialite($event.value)
                 .subscribe(
                  data => {this.sectionsShow  = data;});
    }
    
    onChangeSection($event){
        this.specialite = $event.value;
         if(this.annee == "2CS" || this.annee == "3CS"){
            this.gestEmpTempsService.getGroup2_3CS(this.annee,$event.value)
                 .subscribe(
                  data => {
                    this.groupsShow  = data;
                    console.log(this.groupsShow);});
    }
    else {
           this.gestEmpTempsService.getGroupCPI(this.annee,$event.value)
                 .subscribe(
                  data => {
                    this.groupsShow  = data;
                    console.log(this.groupsShow);});
    }
  }
  
    addCreneau(){
         let objectToPost = {
                 annee:this.annee,
                 creneaux: this.creneauxadd,
                 enseignant :"ds_aktouche@esi.dz",
                 groupes : this.groupadd,
                 module  : "module",
                 salle : "A1" 
         }
         this.gestEmpTempsService.addCreneau(this.day,objectToPost)
          .subscribe(
                  data => {

                    console.log(data);});
    }

    changeDay($event){
      this.day = $event.value;
      console.log($event.value);
    }
    

}
