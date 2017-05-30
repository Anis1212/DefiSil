import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { Md2Module } from 'md2';
import { EnsHomeComponent } from "./ens-home/ens-home.component";
import { AddEvalComponent } from './ens-saisie-notes/ens-gest-eval/add-eval/add-eval.component';
import { DelEvalComponent } from './ens-saisie-notes/ens-gest-eval/del-eval/del-eval.component';
import { ModifEvalComponent } from './ens-saisie-notes/ens-gest-eval/modif-eval/modif-eval.component';
import { EnsServiceService } from "../services/ens-service.service";
import { ModifNoteComponent } from './ens-saisie-notes/modif-note/modif-note.component';
import { EnsConfirmResComponent } from "./ens-confirm-res/ens-confirm-res.component";
import { enseignant_route } from './enseignant-app.routes';
import { RouterModule } from '@angular/router';
import {EnsResService} from "./ens-res-salle/ens-res.service";



@NgModule({
  imports: [
    CommonModule,
     MaterialModule,
     Md2Module,
     RouterModule.forChild(enseignant_route)
  ],
  declarations: [
    EnsHomeComponent,
    AddEvalComponent,
    DelEvalComponent,
    ModifEvalComponent,
    ModifNoteComponent,
    EnsConfirmResComponent

  ],
  entryComponents: [ AddEvalComponent,DelEvalComponent,ModifEvalComponent],
  providers:[EnsServiceService, EnsResService]
})
export class EnseignantAppModule { }
