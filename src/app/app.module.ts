import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule, MdDialogConfig} from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { Md2Module } from 'md2';
import { EnsSaisieAbsComponent } from './enseignant-app/ens-saisie-abs/ens-saisie-abs.component';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';
import { AppComponent } from './app.component';
import { EnseignantAppComponent } from './enseignant-app/enseignant-app.component';
import { EtudiantAppComponent } from './etudiant-app/etudiant-app.component';
import  { EnseignantAppModule } from './enseignant-app/enseignant-app.module';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import {FormulaireEnsComponent} from "./gestionnaire-app/gest-liste-ens/formulaire-ens/formulaire-ens.component";

// import { AddEvalComponent } from './enseignant-app/ens-gest-eval/add-eval/add-eval.component';
// import { DelEvalComponent } from './enseignant-app/ens-gest-eval/del-eval/del-eval.component';
// import { ModifEvalComponent } from './enseignant-app/ens-gest-eval/modif-eval/modif-eval.component';
import {HeaderComponent}from './shared/header/header.component';
import {SideBarComponent} from './shared-etudiant/side-bar/side-bar.component';
import { EnsServiceService } from "./services/ens-service.service";
import { EtudiantAppModule } from "./etudiant-app/etudiant-app.module";
import { NavBarComponent } from './shared-etudiant/nav-bar/nav-bar.component';
import { FooterComponent } from './shared-etudiant/footer/footer.component';
import { RouterModule, Router, Routes } from "@angular/router";
import { routes } from "./app.routes";
import { EtdNotesComponent } from "./etudiant-app/etd-notes/etd-notes.component";
import { FirebaseService } from "./etudiant-app/firebaseServices/firebase.service";
import { LoginComponent } from './login/login.component';
import { RoutesComponent } from './routes/routes.component';


import { EnsResSalleComponent } from "./enseignant-app/ens-res-salle/ens-res-salle.component";
import { EnsGestRdvComponent } from "./enseignant-app/ens-gest-rdv/ens-gest-rdv.component";
import { EnsSaisieNotesComponent } from './enseignant-app/ens-saisie-notes/ens-saisie-notes.component';
import { CalendarComponent } from "angular2-fullcalendar/src/calendar/calendar";
import {AddSectionComponent} from "./gestionnaire-app/gest-modules/GestSection/add-section/add-section.component";
import {AddGroupeComponent} from "./gestionnaire-app/gest-modules/GestGroupe/add-groupe/add-groupe.component";
import {ListAffectationEnsComponent} from "./gestionnaire-app/gest-contenu/list-affectation-ens/list-affectation-ens.component";
import {GestListeEnsComponent} from "./gestionnaire-app/gest-liste-ens/gest-liste-ens.component";
import {GestContenuComponent} from "./gestionnaire-app/gest-contenu/gest-contenu.component";
import {GestionnaireAppModule} from "./gestionnaire-app/gest-app-module";
import { GestionnaireAppComponent } from './gestionnaire-app/gestionnaire-app.component';
import {GestEmpTempsComponent} from "./gestionnaire-app/gest-emp-temps/gest-emp-temps.component";
import {GestServiceService} from "./services/gest-service.service";
import {LoginService} from "./login/login.service";



export const firebaseConfig = {
 apiKey: "AIzaSyAjWKEYmrI06Du6ErO5tDSo6WLtzMka-IU",
    authDomain: "prj2cssil.firebaseapp.com",
    databaseURL: "https://prj2cssil.firebaseio.com",
    projectId: "prj2cssil",
    storageBucket: "prj2cssil.appspot.com",
    messagingSenderId: "152656725479"
};

@NgModule({
  declarations: [
    AppComponent,
    EnseignantAppComponent,
    EtudiantAppComponent,
    GestionnaireAppComponent,
    HeaderComponent,
    SideBarComponent,
    EnsSaisieAbsComponent,
    EnsSaisieNotesComponent,
    EtdNotesComponent,
    EnsResSalleComponent,
    EnsGestRdvComponent,
    LoginComponent,
    NavBarComponent,
    FooterComponent,
    CalendarComponent,
    AddSectionComponent,
    AddGroupeComponent,
    GestListeEnsComponent,
    GestContenuComponent,
    GestEmpTempsComponent,
    ListAffectationEnsComponent,
    FormulaireEnsComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    EnseignantAppModule,
    EtudiantAppModule,
    GestionnaireAppModule,
    Md2Module,
    AngularMultiSelectModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  entryComponents: [ AddSectionComponent, FormulaireEnsComponent,AddGroupeComponent,ListAffectationEnsComponent],
  providers: [EnsServiceService, FirebaseService, GestServiceService, MdDialogConfig, LoginService],
  bootstrap: [AppComponent]

})
export class AppModule { }
