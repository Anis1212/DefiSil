import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';



import { AppComponent } from './app.component';
import { EnseignantAppComponent } from './enseignant-app/enseignant-app.component';
import { EtudiantAppComponent } from './etudiant-app/etudiant-app.component';

import  { EnseignantAppModule } from './enseignant-app/enseignant-app.module';

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
    EnseignantAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
