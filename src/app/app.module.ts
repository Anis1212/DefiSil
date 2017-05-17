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
import { Ng2CompleterModule } from "ng2-completer";
import {HeaderComponent}from './shared/header/header.component';
import {SideBarComponent} from './shared-etudiant/side-bar/side-bar.component';
import { EnsServiceService } from "./services/ens-service.service";
import { EtudiantAppModule } from "./etudiant-app/etudiant-app.module";
import { NavBarComponent } from './shared-etudiant/nav-bar/nav-bar.component';
import { FooterComponent } from './shared-etudiant/footer/footer.component';
import { RouterModule, Router } from "@angular/router";
import { routes } from "./app.routes";
import { EtdNotesComponent } from "./etudiant-app/etd-notes/etd-notes.component";

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
    HeaderComponent,
    SideBarComponent,
    EnsSaisieAbsComponent,
    EnsSaisieNotesComponent,
    NavBarComponent,
    FooterComponent,
    EtudiantAppComponent,
    EtdNotesComponent

  ],
  imports: [
    MaterialModule,
    FormsModule,
    BrowserModule,
    HttpModule,
    EnseignantAppModule,
    EtudiantAppModule,
    Ng2CompleterModule,
    Md2Module,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  entryComponents: [ AddEvalComponent,DelEvalComponent,ModifEvalComponent],

  providers: [EnsServiceService],
  bootstrap: [AppComponent]

})
export class AppModule { }
