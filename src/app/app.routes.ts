import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component')
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contacto/contacto.component')
  },

  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'inicio', pathMatch: 'full'
  }
];
