import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'events-today-tab.page.html',
  styleUrls: ['events-today-tab.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class Tab1Page {
  constructor() {}
}
