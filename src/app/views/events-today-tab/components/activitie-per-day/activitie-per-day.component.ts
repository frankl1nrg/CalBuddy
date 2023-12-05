import { Component, OnInit, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-activitie-per-day',
  templateUrl: './activitie-per-day.component.html',
  styleUrls: ['./activitie-per-day.component.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule]
})
export class ActivitiePerDayComponent  implements OnInit {

  constructor() { }

  @Input('activitiesPerDay')
    activitiesPerDay: any[]=[];

      styleDeppendingOnTag(tag: string):string {
      // Por ejemplo, aplicar diferentes clases según el contenido
      switch (tag) {
        case 'Health':
          return 'yellowBadge'
        case 'Personal':
          return 'blueBadge'
        case 'Sports':
          return 'greenBadge'
        case 'Love':
          return 'pinkBadge'
        default:
          return 'greyBadge'
      }
    }

  ngOnInit() {}

}
