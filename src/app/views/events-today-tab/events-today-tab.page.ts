import { Component } from '@angular/core';

import {  } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,IonMenuButton, IonRouterLink, IonIcon } from '@ionic/angular/standalone';
import { ActivitiePerDayComponent } from './components/activitie-per-day/activitie-per-day.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'events-today-tab.page.html',
  styleUrls: ['events-today-tab.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,IonMenuButton, IonRouterLink, ActivitiePerDayComponent, IonIcon],
})
export class Tab1Page {
  constructor() {}

  activities = [
    { 
      month:'Dec',
      day:'18',
      activities:[
        {
        name:'Dentist',
        timeStart:'1:00',
        timeEnd:'2:00',
        tags:['Personal','Health']
        },
        {
          name:'Soccer',
          timeStart:'3:00',
          timeEnd:'4:00',
          tags:['Sports','Health']
        }
      ]
    },
    {
      month:'Dec',
      day:'19',
      activities:[
        {
          name:'VolleyBall',
          timeStart:'3:00',
          timeEnd:'4:00',
          tags:['Sports','Health']
        }
      ]
    },
    {
      month:'Dec',
      day:'20',
      activities:[{
        name:'Date',
        timeStart:'3:00',
        timeEnd:'4:00',
        tags:['Love','Relationship']
      }]
    }
  ]
}
