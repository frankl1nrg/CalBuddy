import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonCol, IonRow, IonGrid, IonIcon, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonCardTitle, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.css'],
  standalone:true,
  imports:[CommonModule,IonGrid,IonRow,IonCol, IonIcon, IonCard,IonCardHeader, IonCardSubtitle, IonCardContent, IonCardTitle, IonList, IonItem, IonLabel]
})
export class DayViewComponent {


  calculateTop(index: number): string {
    return `${index * 100}px`; // Adjust the multiplier based on your design
  }

  hoursArray = Array.from({length: 24}, (_, i) => i);

  getHour(time: string): number {
    return parseInt(time.split(':')[0], 10);
  }

  // Assuming these functions are in your DayViewComponent class
hasActivitiesForHour(hour: number): boolean {
  return !!this.activitiesPerDay[0]?.activities.find(activity => this.getHour(activity.timeStart) === hour);
}

getActivitiesForHour(hour: number){
  return this.activitiesPerDay[0]?.activities.filter(activity => this.getHour(activity.timeStart) === hour) || [];
}

formatHour(hour: number): string {
  if (hour === 0) {
    return '12 AM';
  } else if (hour < 12) {
    return `${hour} AM`;
  } else if (hour === 12) {
    return 'noon';
  } else {
    return `${hour - 12} PM`;
  }
}




activitiesPerDay = [
  { 
    month:"12",
    day:"18",
    year:"2023",
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
    month:"12",
    day:"19",
    year:"2023",
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
    month:"12",
    day:"20",
    year:"2023",
    activities:[{
      name:'Date',
      timeStart:'3:00',
      timeEnd:'4:00',
      tags:['Love','Relationship']
    }]
  }
]

}
