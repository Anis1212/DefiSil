import { Component, OnInit } from '@angular/core';
import { enseignant_route } from '../enseignant-app/enseignant-app.routes';

  export interface SideBareElements{
  link:string,
  name:string,
  icon:string
}

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html'
})
export class RoutesComponent implements OnInit {

  private user:String;

  private type:String;

  public disabled: boolean = false;

  public status: { isopen: boolean } = { isopen: false };

  public routes:SideBareElements[];



  public enseignantRoutes:SideBareElements[]=[
    {link:'/app-enseignant/accueil',name:'Accueil',icon:''},
    {link:'/app-enseignant/saisiAbsence',name:'Saisie absences',icon:''},
    {link:'/app-enseignant/enseignantNotes',name:'Saisie notes',icon:''},
    {link: '/app-enseignant/rendezVous', name:'Rendez-Vous', icon:'' },
    {link: '/app-enseignant/resSalle', name:'Reserver Salle',icon:'' }
  ];

  public gestionnaireRoutes:SideBareElements[]=[
    {link:'/app-gestionnaire/gest-modules',name:'Gestion des etudiants',icon:''},
    {link:'/app-gestionnaire/gest-contenu',name:'Gestion du contenu',icon:''},
    {link:'/app-gestionnaire/app-list-ens',name:'Gestion des enseignants',icon:''},
    {link:'/app-gestionnaire/gest_emp-tmps',name:'Gestion des emplois du temps',icon:''}

  ];


  public etudiantRoutes:SideBareElements[]=[
    {link:'/app-etudiant/accueil',name:'Accueil',icon:''},
    {link:'/app-etudiant/profile',name:'Profile',icon:''},
    {link:'/app-etudiant/notes',name:'Notes',icon:''},
    {link:'/app-etudiant/absences',name:'Absence',icon:''},
    {link:'/app-etudiant/rendezVous',name:'Rendez Vous',icon:''},

  ];

  userType:String = localStorage.getItem("userType");
  constructor() {


  }

  public GetSideBareRoutes(type:String):SideBareElements[]{

    if (this.userType === "etudiant"){
             return this.etudiantRoutes;}
    else if (this.userType === "enseignant"){
             return this.enseignantRoutes;
    }
    else {
          return this.gestionnaireRoutes;
    }
  }

  public toggled(open: boolean): void {
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void {}
}
