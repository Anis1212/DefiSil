import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GestModulesComponent} from './gest-modules/gest-modules.component'
import { GestionnaireAppComponent } from './gestionnaire-app.component';
import {GestContenuComponent} from "./gest-contenu/gest-contenu.component";
import {GestListeEnsComponent} from "./gest-liste-ens/gest-liste-ens.component";
import {GestEmpTempsComponent} from "./gest-emp-temps/gest-emp-temps.component";



export const gestionnaire_routes: Routes = [
    {
        path:'app-gestionnaire',
        component:GestionnaireAppComponent,
        children:[
          { path: '', redirectTo: 'gest-etudiants', pathMatch: 'full' },
          { path: 'gest-etudiants', component:  GestModulesComponent},
          { path: 'gest-contenu', component:  GestContenuComponent},
          { path: 'app-list-ens', component:  GestListeEnsComponent},
          { path: 'gest_emp-tmps', component:  GestEmpTempsComponent},
        ]
}];

