import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome', // Redirects to login by default
    pathMatch: 'full'
  },
  {
    path:'welcome',
    loadComponent:()=>import('./views/welcome/welcome.page').then((m)=> m.WelcomePage)
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
  {
    path: 'new-event',
    loadComponent: () => import('./views/create-event-tab/create-event-tab.page').then( m => m.Tab2Page)
  },
];
