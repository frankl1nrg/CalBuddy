import { Routes } from '@angular/router';
import { TabsPage } from './main-tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('../events-today-tab/events-today-tab.page').then((m) => m.Tab1Page),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../create-event-tab/create-event-tab.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        children:
        [
          {
          path:'',
          loadChildren: () =>
            import('../calendar-view-tab/calendar-view-router-routing.routes').then((m) => m.CalendarViewRouterModule),
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];
