import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab2',
  templateUrl: 'create-event-tab.page.html',
  styleUrls: ['create-event-tab.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent]
})
export class Tab2Page {

  constructor() {}

}
