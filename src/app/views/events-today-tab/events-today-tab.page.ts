import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {  } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,IonMenuButton, IonRouterLink } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'events-today-tab.page.html',
  styleUrls: ['events-today-tab.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,IonMenuButton, IonRouterLink],
})
export class Tab1Page {
  constructor() {}
}
