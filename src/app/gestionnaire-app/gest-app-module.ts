import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { Md2Module } from 'md2';
import {SelectButtonModule} from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {GestModulesComponent} from './gest-modules/gest-modules.component';
import {routesGestionnaire} from './gest-app-routes';
import {GestionnaireAppComponent} from './gestionnaire-app.component'
import {PickListModule} from 'primeng/primeng';




@NgModule({
  imports: [
    CommonModule,
    SelectButtonModule,
    MaterialModule,
    Md2Module,
    FormsModule,
   RouterModule 
  ],
  declarations: [
    GestModulesComponent,
    GestionnaireAppComponent

  ]
})

export class GestionnaireAppModule { }
