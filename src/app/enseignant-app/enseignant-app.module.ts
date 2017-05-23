import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { Md2Module } from 'md2';
import { EnsHomeComponent } from "./ens-home/ens-home.component";
import { AddEvalComponent } from './ens-saisie-notes/ens-gest-eval/add-eval/add-eval.component';
import { DelEvalComponent } from './ens-saisie-notes/ens-gest-eval/del-eval/del-eval.component';
import { ModifEvalComponent } from './ens-saisie-notes/ens-gest-eval/modif-eval/modif-eval.component';
import { EnsEmpTempsComponent } from './ens-emp-temps/ens-emp-temps.component';
import { EnsServiceService } from "../services/ens-service.service";
import { ModifNoteComponent } from './ens-saisie-notes/modif-note/modif-note.component';
import { EnsConfirmResComponent } from "./ens-confirm-res/ens-confirm-res.component";



@NgModule({
  imports: [
    CommonModule,
     MaterialModule,
     Md2Module,
  ],
  declarations: [
    EnsHomeComponent,
    AddEvalComponent,
    DelEvalComponent,
    ModifEvalComponent,
    EnsEmpTempsComponent,
    ModifNoteComponent,
    EnsConfirmResComponent

  ],
  entryComponents: [ AddEvalComponent,DelEvalComponent,ModifEvalComponent],
  providers:[EnsServiceService]
})
export class EnseignantAppModule { }
