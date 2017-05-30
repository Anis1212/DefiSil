import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { EtdRendezVousComponent } from './etd-rendez-vous/etd-rendez-vous.component';
import { ConfirmDialog } from './etd-rendez-vous/ajout-rdv/ajout-rdv.component';
import { EtdProfileComponent } from './etd-profile/etd-profile.component';
import { AjoutRdvService } from "./etd-rendez-vous/ajout-rdv/ajout-rdv.service";
import { MdAutocompleteModule } from "@angular/material";
import { FormsModule , ReactiveFormsModule} from "@angular/forms";
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
import { etudiant_route } from "./etudiant-route";
import { EtdReleveNotesComponent } from './etd-releve-notes/etd-releve-notes.component';
import { EtdPlanExamsComponent } from './etd-plan-exams/etd-plan-exams.component';
import { EtdNotesPersoComponent } from './etd-notes-perso/etd-notes-perso.component';
import { EtdAccueilComponent } from './etd-accueil/etd-accueil.component';
import { FirebaseService } from "./firebaseServices/firebase.service";
import { AngularFireModule } from "angularfire2";
import { firebaseConfig } from "../app.module";
import { EtdAccueilService } from "./etd-accueil/etd-accueil.service";
@NgModule({
  imports: [
    CommonModule,
    MdAutocompleteModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(etudiant_route),
    AngularFireModule.initializeApp(firebaseConfig)
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
         SuppRdvService,
         ModifRdvService,
         AjoutRdvService,
         NotifRdvService,
         EtdNotesService,
         EtdProfileService,
         EtdAbsenceService,
         EtdAccueilService,
         EtdRendezVousService,
         FirebaseService
    ],
    entryComponents: [
        ConfirmDialog,ModifRdvComponent,SuppRdvComponent,EtdNotificationComponent
    ],
})
export class EtudiantAppModule { }
