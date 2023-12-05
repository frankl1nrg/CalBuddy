import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './calendar-view-tab.page';




const routes: Routes = [
  {
    path:'',
        component:Tab3Page,
        children:
        [
          {
          path:"month-view",
          loadComponent: () =>import('./views/month-view/month-view.component').then((m) => m.MonthViewComponent)
          },
          {
            path:"week-view",
            loadComponent: () =>import('./views/week-view/week-view.component').then((m) => m.WeekViewComponent)
          },
          {
            path:"day-view",
            loadComponent: () =>import('./views/day-view/day-view.component').then((m) => m.DayViewComponent)
          },
          {
            path: '',
            redirectTo: '/tabs/tab3/month-view',
            pathMatch: 'full',
          },
          {
            path: '**',
            redirectTo: '/tabs/tab3/month-view',
          },
        ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab3/month-view',
    pathMatch: 'full',
  },
  {
    path: "**",
    redirectTo: '/tabs/tab3/month-view'
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarViewRouterModule {}

