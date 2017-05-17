import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EtudiantAppComponent } from "./etudiant-app.component";
import { EtdNotesComponent } from "./etd-notes/etd-notes.component";
import { EtdRendezVousComponent } from "./etd-rendez-vous/etd-rendez-vous.component";
import { EtdProfileComponent } from "./etd-profile/etd-profile.component";
import { EtdAbsencesComponent } from "./etd-absences/etd-absences.component";
import { EtdReleveNotesComponent } from "./etd-releve-notes/etd-releve-notes.component";
import { EtdPlanExamsComponent } from "./etd-plan-exams/etd-plan-exams.component";
import { EtdNotesPersoComponent } from "./etd-notes-perso/etd-notes-perso.component";
import { EtdAccueilComponent } from "./etd-accueil/etd-accueil.component";

export const etudiant_route: Routes = [
    { path: '', redirectTo: 'app-etudiant-acceuil', pathMatch: 'full' },
    { path: 'app-etudiant-notes', component: EtdNotesComponent   },
    { path: 'app-etudiant-rdvs', component: EtdRendezVousComponent   },
    { path: 'app-etudiant-profile', component: EtdProfileComponent   },
    { path: 'app-etudiant-abs', component: EtdAbsencesComponent   },
    { path: 'app-etudiant-accueil/app-etudiant-plan-exams', component: EtdPlanExamsComponent},
    { path: 'app-etudiant-accueil/app-etudiant-notes-perso', component: EtdNotesPersoComponent},
    { path: 'app-etudiant-accueil/app-etudiant-releve-notes', component: EtdReleveNotesComponent},
    { path: 'app-etudiant-accueil', component: EtdAccueilComponent},
];