import { Component, EnvironmentInjector, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonContent, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square } from 'ionicons/icons';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-tabs',
  templateUrl: 'main-tabs.page.html',
  styleUrls: ['main-tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel,IonContent,SharedModule,IonRouterOutlet],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);



  constructor() {
    addIcons({ triangle, ellipse, square });
  }
}
