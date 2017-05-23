import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GestModulesComponent} from './gest-modules/gest-modules.component'
export const router: Routes = [

    { path: '', redirectTo: 'gest-modules', pathMatch: 'full' },
    { path: 'gest-modules', component: GestModulesComponent },

]

export const routesGestionnaire: ModuleWithProviders = RouterModule.forRoot(router);
