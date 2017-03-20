/**
 * Created by Anis on 15/03/2017.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  EnseignantAppComponent } from './enseignant-app/enseignant-app.component';


export const router: Routes = [
  { path: '', redirectTo: 'Enseignant', pathMatch: 'full' },
  { path:'Enseignant', component: EnseignantAppComponent},

];


export const routes: ModuleWithProviders = RouterModule.forRoot(router);
