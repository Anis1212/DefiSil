import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EnseignantAppComponent  } from './enseignant-app/enseignant-app.component';

export const router: Routes = [

    { path: '', redirectTo: 'app-enseignant', pathMatch: 'full' },
    { path: 'app-enseignant', component: EnseignantAppComponent   },

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);