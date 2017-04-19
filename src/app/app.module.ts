import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { Md2Module } from 'md2';


import { EnsSaisieNotesComponent } from './enseignant-app/ens-saisie-notes/ens-saisie-notes.component';
import { EnsSaisieAbsComponent } from './enseignant-app/ens-saisie-abs/ens-saisie-abs.component';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';
import { AppComponent } from './app.component';
import { EnseignantAppComponent } from './enseignant-app/enseignant-app.component';
import { EtudiantAppComponent } from './etudiant-app/etudiant-app.component';

import  { EnseignantAppModule } from './enseignant-app/enseignant-app.module';

import { AddEvalComponent } from './enseignant-app/ens-gest-eval/add-eval/add-eval.component';
import { DelEvalComponent } from './enseignant-app/ens-gest-eval/del-eval/del-eval.component';
import { ModifEvalComponent } from './enseignant-app/ens-gest-eval/modif-eval/modif-eval.component';

import {HeaderComponent}from './shared/header/header.component';
import {SideBarComponent} from './shared/side-bar/side-bar.component';
import {routes} from './app.routes'
import {EnsServiceService} from "./services/ens-service.service";

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
    EtudiantAppComponent,
    HeaderComponent,
    SideBarComponent,
    EnsSaisieAbsComponent,
    EnsSaisieNotesComponent

  ],
  imports: [
    MaterialModule,
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    EnseignantAppModule,
    Md2Module,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  entryComponents: [ AddEvalComponent,DelEvalComponent,ModifEvalComponent],

  providers: [EnsServiceService],
  bootstrap: [AppComponent]

})
export class AppModule { }
