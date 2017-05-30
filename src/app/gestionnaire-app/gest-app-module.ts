import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { Md2Module } from 'md2';
import {SelectButtonModule} from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {GestModulesComponent} from './gest-modules/gest-modules.component';
import { gestionnaire_routes } from './gest-app-routes';
import {GestionnaireAppComponent} from './gestionnaire-app.component'
import {PickListModule} from 'primeng/primeng';




@NgModule({
  imports: [
    CommonModule,
    SelectButtonModule,
    MaterialModule,
    Md2Module,
    FormsModule,
   RouterModule,
   RouterModule.forChild(gestionnaire_routes), 
  ],
  declarations: [
    GestModulesComponent

  ]
})

export class GestionnaireAppModule { }
