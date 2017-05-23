import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EnseignantAppComponent  } from './enseignant-app/enseignant-app.component';
import {EnsSaisieAbsComponent} from "./enseignant-app/ens-saisie-abs/ens-saisie-abs.component";
import {EnsEmpTempsComponent} from "./enseignant-app/ens-emp-temps/ens-emp-temps.component";
import {EnsSaisieNotesComponent} from "./enseignant-app/ens-saisie-notes/ens-saisie-notes.component";
import {EnsResSalleComponent} from "./enseignant-app/ens-res-salle/ens-res-salle.component";
import {EnsGestRdvComponent} from "./enseignant-app/ens-gest-rdv/ens-gest-rdv.component";
import {AddEvalComponent} from './enseignant-app/ens-saisie-notes/ens-gest-eval/add-eval/add-eval.component';
import {DelEvalComponent} from './enseignant-app/ens-saisie-notes/ens-gest-eval/del-eval/del-eval.component';
import {ModifEvalComponent} from './enseignant-app/ens-saisie-notes/ens-gest-eval/modif-eval/modif-eval.component';
import {EnsHomeComponent} from "./enseignant-app/ens-home/ens-home.component";
import {GestionnaireAppComponent} from "./gestionnaire-app/gestionnaire-app.component";
import {GestContenuComponent} from "./gestionnaire-app/gest-contenu/gest-contenu.component";
import {GestListeEnsComponent} from "./gestionnaire-app/gest-liste-ens/gest-liste-ens.component";
import {GestModulesComponent} from "./gestionnaire-app/gest-modules/gest-modules.component";

export const router: Routes = [

    { path: '', redirectTo: 'app-enseignant-accueil', pathMatch: 'full' },
    { path: 'app-enseignant', component: EnseignantAppComponent   },
    { path: 'app-enseignant-ep', component: EnsEmpTempsComponent   },
    { path: 'app-enseignant-sa', component: EnsSaisieAbsComponent   },

    { path: 'app-enseignant-no', component: EnsSaisieNotesComponent,
      children: [
        { path: '', redirectTo: 'ens-add-eval', pathMatch: 'full' },
        { path: 'ens-add-eval', component: AddEvalComponent, },
        { path: 'ens-modif-eval', component: ModifEvalComponent, },
        { path: 'ens-delete-eval', component: DelEvalComponent, },
      ] },

    { path: 'app-enseignant-accueil', component: EnsHomeComponent },
    { path: 'app-enseignant-rdv', component: EnsGestRdvComponent },
    { path: 'app-enseignant-salle', component: EnsResSalleComponent },

  { path: '', redirectTo: 'app-gestionnaire', pathMatch: 'full' },

  { path: 'app-gestionnaire', component: GestionnaireAppComponent,
    children: [
      { path: '', redirectTo: 'gest-modules', pathMatch: 'full' },
      { path: 'gest-contenu', component:  GestContenuComponent},
      { path: 'app-list-ens', component:  GestListeEnsComponent},

      { path: 'gest-modules', component:  GestModulesComponent},

    ]

  }
];


export const routes: ModuleWithProviders = RouterModule.forRoot(router);




