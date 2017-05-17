import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { EtdRendezVousComponent } from './etd-rendez-vous/etd-rendez-vous.component';
import { ConfirmDialog } from './etd-rendez-vous/ajout-rdv/ajout-rdv.component';
import { EtdProfileComponent } from './etd-profile/etd-profile.component';
import { AjoutRdvService } from "./etd-rendez-vous/ajout-rdv/ajout-rdv.service";
import { MdAutocompleteModule } from "@angular/material";
import { FormsModule } from "@angular/forms";
import { EtdAbsencesComponent } from './etd-absences/etd-absences.component';
import { ModifRdvComponent } from './etd-rendez-vous/modif-rdv/modif-rdv.component';
import { ModifRdvService } from "./etd-rendez-vous/modif-rdv/modif-rdv.service";
import { SuppRdvComponent } from "./etd-rendez-vous/supp-rdv/supp-rdv.component";
import { SuppRdvService } from "./etd-rendez-vous/supp-rdv/supp-rdv.service";
import { EtdNotificationComponent } from './etd-notification/etd-notification.component';
import { NotifRdvService } from "./etd-notification/notif-rdv.service";
import { EtdAbsenceService } from "./etd-absences/etd-absence.service";
import { EtdNotesService } from "./etd-notes/etd-notes.service";
import { EtdProfileService } from "./etd-profile/etd-profile.service";
import { EtdRendezVousService } from "./etd-rendez-vous/etd-rendez-vous.service";
import { RouterModule } from "@angular/router";
import { etudiant_route } from "./etd-route";
import { EtdReleveNotesComponent } from './etd-releve-notes/etd-releve-notes.component';
import { EtdPlanExamsComponent } from './etd-plan-exams/etd-plan-exams.component';
import { EtdNotesPersoComponent } from './etd-notes-perso/etd-notes-perso.component';
import { EtdAccueilComponent } from './etd-accueil/etd-accueil.component';
@NgModule({
  imports: [
    CommonModule,
    MdAutocompleteModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot(etudiant_route)
  ],
  declarations: [
          EtdRendezVousComponent,
          ConfirmDialog,
          EtdProfileComponent,
          EtdAbsencesComponent,
          ModifRdvComponent, 
          SuppRdvComponent, 
          EtdNotificationComponent,
          EtdReleveNotesComponent, 
          EtdPlanExamsComponent, 
          EtdNotesPersoComponent, 
          EtdAccueilComponent],
   exports: [
        ConfirmDialog,ModifRdvComponent,SuppRdvComponent,EtdNotificationComponent
    ],
    providers: [
         AjoutRdvService,
         ModifRdvService,
         SuppRdvService,
         NotifRdvService,
         EtdAbsenceService,
         EtdNotesService,
         EtdProfileService,
         EtdRendezVousService
    ],
    entryComponents: [
        ConfirmDialog,ModifRdvComponent,SuppRdvComponent,EtdNotificationComponent
    ],
})
export class EtudiantAppModule { }
