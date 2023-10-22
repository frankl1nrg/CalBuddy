import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab3',
  templateUrl: 'calendar-view-tab.page.html',
  styleUrls: ['calendar-view-tab.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class Tab3Page {
  constructor() {}
}
