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
    { 
        path:'app-etudiant',
        component:EtudiantAppComponent,
        children:[
                { path: 'accueil', component: EtdAccueilComponent},
                { path: 'profile', component: EtdProfileComponent},
                { path: 'notes', component: EtdNotesComponent},
                { path: 'rendezVous', component: EtdRendezVousComponent},
                { path: 'absences', component: EtdAbsencesComponent},
                { path: 'exams', component: EtdPlanExamsComponent},
                { path: 'notes-perso', component: EtdNotesPersoComponent},
                { path: 'releve-notes', component: EtdReleveNotesComponent}
        ]
}];