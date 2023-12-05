import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', // Redirects to login by default
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./views/login/login.page').then((m) => m.LogInPage)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./views/main-tabs/main-tabs.routes').then(m => m.routes)
    // canActivate: [AuthGuard] // Use this if you have an AuthGuard implemented
  },
  {
    path: '**',
    redirectTo: 'tabs', // Redirects to login by default
  },
];
