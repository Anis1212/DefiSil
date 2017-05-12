import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { Md2Module } from 'md2';

import { routes } from './app.routes'
import { AppComponent } from './app.component';
import { HeaderComponent }from './shared/header/header.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { EnsServiceService } from "./services/ens-service.service";
import { EnseignantAppComponent } from "./enseignant-app/enseignant-app.component";
import { EtudiantAppComponent } from './etudiant-app/etudiant-app.component';
import { EnsResSalleComponent } from "./enseignant-app/ens-res-salle/ens-res-salle.component";
import { EnsGestRdvComponent } from "./enseignant-app/ens-gest-rdv/ens-gest-rdv.component";
import { EnsSaisieNotesComponent } from './enseignant-app/ens-saisie-notes/ens-saisie-notes.component';
import { EnsSaisieAbsComponent } from './enseignant-app/ens-saisie-abs/ens-saisie-abs.component';
import { EnseignantAppModule } from './enseignant-app/enseignant-app.module';
import { EtdNotesComponent } from './etudiant-app/etd-notes/etd-notes.component';
import { CalendarComponent } from "angular2-fullcalendar/src/calendar/calendar";

export const firebaseConfig = {
  apiKey: 'AIzaSyAjWKEYmrI06Du6ErO5tDSo6WLtzMka-IU',
  authDomain: 'prj2cssil.firebaseapp.com',
  databaseURL: 'https://prj2cssil.firebaseio.com',
  storageBucket: 'prj2cssil.appspot.com',
  messagingSenderId: '152656725479'
};

@NgModule({
  declarations: [
    AppComponent,
    EnseignantAppComponent,
    EtudiantAppComponent,
    HeaderComponent,
    SideBarComponent,
    EnsSaisieAbsComponent,
    EnsSaisieNotesComponent,
    EtdNotesComponent,
    EnsResSalleComponent,
    EnsGestRdvComponent,
    CalendarComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    EnseignantAppModule,
    Md2Module,
    RouterModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [EnsServiceService],
  bootstrap: [AppComponent]

})
export class AppModule { }
