import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EnseignantAppComponent  } from './enseignant-app/enseignant-app.component';
import {EnsSaisieAbsComponent} from "./enseignant-app/ens-saisie-abs/ens-saisie-abs.component";
import {EnsEmpTempsComponent} from "./enseignant-app/ens-emp-temps/ens-emp-temps.component";
import {EnsSaisieNotesComponent} from "./enseignant-app/ens-saisie-notes/ens-saisie-notes.component";
import { CardsComponent } from "./enseignant-app/cards/cards.component";
import { EtudiantAppComponent } from "./etudiant-app/etudiant-app.component";
import { EtdNotesComponent } from "./etudiant-app/etd-notes/etd-notes.component";
import { EtdRendezVousComponent } from "./etudiant-app/etd-rendez-vous/etd-rendez-vous.component";
import { EtdProfileComponent } from "./etudiant-app/etd-profile/etd-profile.component";
import { EtdAbsencesComponent } from "./etudiant-app/etd-absences/etd-absences.component";
import { EtdReleveNotesComponent } from "./etudiant-app/etd-releve-notes/etd-releve-notes.component";
import { EtdPlanExamsComponent } from "./etudiant-app/etd-plan-exams/etd-plan-exams.component";
import { EtdNotesPersoComponent } from "./etudiant-app/etd-notes-perso/etd-notes-perso.component";
import { EtdAccueilComponent } from "./etudiant-app/etd-accueil/etd-accueil.component";

export const routes: Routes = [
    { path: '', redirectTo: 'app-etudiant', pathMatch: 'full' },
    { path: 'app-enseignant', component: EnseignantAppComponent   },
    { path: 'app-enseignant-ep', component: EnsEmpTempsComponent   },
    { path: 'app-enseignant-sa', component: EnsSaisieAbsComponent   },
    { path: 'app-enseignant-no', component: EnsSaisieNotesComponent   },
    { path: 'app-enseignant-accueil', component: CardsComponent   },
    { 
        path: 'app-etudiant',
        component: EtudiantAppComponent ,
        children:
        [
               { path: '', redirectTo: 'app-etudiant-acceuil', pathMatch: 'full' },
               { path: 'app-etudiant-accueil', component: EtdAccueilComponent   },
               { path: 'app-etudiant-notes', component: EtdNotesComponent   },
               { path: 'app-etudiant-rdvs', component: EtdRendezVousComponent   },
               { path: 'app-etudiant-profile', component: EtdProfileComponent   },
               { path: 'app-etudiant-abs', component: EtdAbsencesComponent   },
               { path: 'app-etudiant-accueil/app-etudiant-releve-notes', component: EtdReleveNotesComponent},
               { path: 'app-etudiant-accueil/app-etudiant-plan-exams', component: EtdPlanExamsComponent},
               { path: 'app-etudiant-accueil/app-etudiant-notes-perso', component: EtdNotesPersoComponent}
        ]  
    }


];