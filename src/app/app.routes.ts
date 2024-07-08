import { provideRouter, RouterModule, Routes } from '@angular/router';
import HomeComponent from './pages/home/home.component';
import ContactoComponent from './pages/contacto/contacto.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
];

export const appRoutes = provideRouter(routes);
