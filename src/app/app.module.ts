import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { Md2Module } from 'md2';


import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';
import { AppComponent } from './app.component';
import { EnseignantAppComponent } from './enseignant-app/enseignant-app.component';
import { EtudiantAppComponent } from './etudiant-app/etudiant-app.component';

import  { EnseignantAppModule } from './enseignant-app/enseignant-app.module';

import { AddEvalComponent } from './enseignant-app/ens-gest-eval/add-eval/add-eval.component';
import { DelEvalComponent } from './enseignant-app/ens-gest-eval/del-eval/del-eval.component';
import { ModifEvalComponent } from './enseignant-app/ens-gest-eval/modif-eval/modif-eval.component';

import {routes} from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    EtudiantAppComponent,

  ],
  imports: [
    MaterialModule,
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    EnseignantAppModule,
    Md2Module
  ],
  entryComponents: [ AddEvalComponent,DelEvalComponent,ModifEvalComponent],
 
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
