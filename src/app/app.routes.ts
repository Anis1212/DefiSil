import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EnseignantAppComponent  } from './enseignant-app/enseignant-app.component';
import {EnsSaisieAbsComponent} from "./enseignant-app/ens-saisie-abs/ens-saisie-abs.component";
import {EnsEmpTempsComponent} from "./enseignant-app/ens-emp-temps/ens-emp-temps.component";
import {EnsSaisieNotesComponent} from "./enseignant-app/ens-saisie-notes/ens-saisie-notes.component";
import {CardsComponent} from "./enseignant-app/cards/cards.component";

export const router: Routes = [

    { path: '', redirectTo: 'app-enseignant-sa', pathMatch: 'full' },
    { path: 'app-enseignant', component: EnseignantAppComponent   },
    { path: 'app-enseignant-ep', component: EnsEmpTempsComponent   },
    { path: 'app-enseignant-sa', component: EnsSaisieAbsComponent   },
    { path: 'app-enseignant-no', component: EnsSaisieNotesComponent   },
    { path: 'app-enseignant-accueil', component: CardsComponent   }

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
