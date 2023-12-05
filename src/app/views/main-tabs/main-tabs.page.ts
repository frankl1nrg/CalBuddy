import { Component, EnvironmentInjector, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IonHeader,IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonToolbar, IonButtons, IonMenuButton, IonTitle,IonContent, IonRouterOutlet, IonMenu } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square } from 'ionicons/icons';


@Component({
  selector: 'app-tabs',
  templateUrl: 'main-tabs.page.html',
  styleUrls: ['main-tabs.page.scss'],
  standalone: true,
  imports: [IonRouterOutlet,IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonMenu,IonTitle,IonContent],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ triangle, ellipse, square });
  }
}
