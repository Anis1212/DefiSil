import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EnseignantAppComponent  } from './enseignant-app/enseignant-app.component';
import {EnsSaisieAbsComponent} from "./enseignant-app/ens-saisie-abs/ens-saisie-abs.component";
import {EnsEmpTempsComponent} from "./enseignant-app/ens-emp-temps/ens-emp-temps.component";
import {EnsSaisieNotesComponent} from "./enseignant-app/ens-saisie-notes/ens-saisie-notes.component";
import {CardsComponent} from "./enseignant-app/cards/cards.component";
import {EnsResSalleComponent} from "./enseignant-app/ens-res-salle/ens-res-salle.component";
import {EnsGestRdvComponent} from "./enseignant-app/ens-gest-rdv/ens-gest-rdv.component";
import {AddEvalComponent} from './enseignant-app/ens-gest-eval/add-eval/add-eval.component';
import {DelEvalComponent} from './enseignant-app/ens-gest-eval/del-eval/del-eval.component';
import {ModifEvalComponent} from './enseignant-app/ens-gest-eval/modif-eval/modif-eval.component';

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

    { path: 'app-enseignant-accueil', component: CardsComponent   },
    { path: 'app-enseignant-rdv', component: EnsGestRdvComponent   },
    { path: 'app-enseignant-salle', component: EnsResSalleComponent  }
]


export const routes: ModuleWithProviders = RouterModule.forRoot(router);




