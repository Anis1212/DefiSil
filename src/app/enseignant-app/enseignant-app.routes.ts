import { Routes } from '@angular/router';
import { EnseignantAppComponent } from './enseignant-app.component';
import { EnsSaisieAbsComponent } from './ens-saisie-abs/ens-saisie-abs.component';
import { EnsHomeComponent } from './ens-home/ens-home.component';
import { EnsSaisieNotesComponent } from './ens-saisie-notes/ens-saisie-notes.component';
import { AddEvalComponent } from './ens-saisie-notes/ens-gest-eval/add-eval/add-eval.component';
import { ModifEvalComponent } from './ens-saisie-notes/ens-gest-eval/modif-eval/modif-eval.component';
import { DelEvalComponent } from './ens-saisie-notes/ens-gest-eval/del-eval/del-eval.component';
import { EnsGestRdvComponent } from './ens-gest-rdv/ens-gest-rdv.component';
import { EnsResSalleComponent } from './ens-res-salle/ens-res-salle.component';



export const enseignant_route: Routes = [
    {
        path:'app-enseignant',
        component:EnseignantAppComponent,
        children:[
                  { path: '', redirectTo: 'acceuil', pathMatch: 'full' },
                 { path: 'accueil', component: EnsHomeComponent },
                 { path: 'saisiAbsence', component: EnsSaisieAbsComponent },
                 { path: 'enseignantNotes',component:EnsSaisieNotesComponent,
                  children: [
                  { path: '', redirectTo: 'addEval', pathMatch: 'full' },
                  { path: 'addEval', component: AddEvalComponent, },
                  { path: 'editEval', component: ModifEvalComponent, },
                  { path: 'delEval', component: DelEvalComponent, },
                  ]
                 },
                 { path: 'rendezVous', component: EnsGestRdvComponent },
                 { path: 'resSalle', component: EnsResSalleComponent },
        ]
}];
