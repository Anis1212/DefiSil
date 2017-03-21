import { EnseignantAppComponent } from './enseignant-app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent}from '../shared/header/header.component';
import {SideBarComponent} from '../shared/side-bar/side-bar.component';
import { CardsComponent } from './cards/cards.component';
import { MaterialModule } from '@angular/material';




@NgModule({
  imports: [
    CommonModule,
     MaterialModule
  ],
  declarations: [
    SideBarComponent,
    HeaderComponent,
    EnseignantAppComponent,
    CardsComponent

  ]
})
export class EnseignantAppModule { }
