import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, } from '@ionic/angular/standalone';


@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.css'],
  standalone:true,
  imports:[IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,CommonModule]
})
export class ActivityCardComponent {
  @Input('Activities') 
  activitiesPerDay : any[]=[];
  filteredActivities: any[] = [];

  @Input('day') 
  daySent :string='';

  ngOnChanges() {
    if (this.daySent) {
      this.filteredActivities = this.activitiesPerDay.filter(date => `${date.year}-${date.month}-${date.day}` === this.daySent);
    }
  }


  


}
