import { Routes, RouterModule } from '@angular/router';
import { EnseignantAppComponent  } from './enseignant-app/enseignant-app.component';
import { EtudiantAppComponent } from "./etudiant-app/etudiant-app.component";
import { LoginComponent } from "./login/login.component";
import { GestionnaireAppComponent } from './gestionnaire-app/gestionnaire-app.component';

export const routes: Routes = [

    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'app-etudiant', component: EtudiantAppComponent   },
    { path: 'app-enseignant', component: EnseignantAppComponent   },
    { path: 'app-gestionnai', component: GestionnaireAppComponent   },
    { path: 'login', component:LoginComponent}

];
