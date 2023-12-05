import { Component } from '@angular/core';
import { ActivityCardComponent } from '../../components/activity-card/activity-card.component';
import { IonContent, IonDatetime, IonItem, IonCol, IonRow, IonGrid } from '@ionic/angular/standalone';
import { ChangeViewChipsComponent } from '../../components/change-view-chips/change-view-chips.component';


@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.css'],
  standalone:true,
  imports:[ActivityCardComponent,IonDatetime,IonContent,IonItem,ChangeViewChipsComponent,IonCol,IonRow,IonGrid]
})
export class MonthViewComponent {

  selectedDay:string='';
  month:number=0;
  


  ionchange(event:any){
    const dateClicked = event.detail.value;
    this.selectedDay=dateClicked.split("T")[0]
  }

  private textColorArray = ['#800080', '#09721b', 'var(--ion-color-secondary-contrast)'];
  private backgroundColorArray = ['#ffc0cb', '#c8e5d0', 'var(--ion-color-secondary)'];
  

activitiesPerDay = [
    { 
      month:"12",
      day:"18",
      year:"2023",
      activities:[
        {
        name:'Dentist',
        timeStart:'1:00',
        timeEnd:'2:00pm',
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

private formattedDates = this.activitiesPerDay.map(item => {
    const formattedMonth = ('0' + item.month).slice(-2); // Ensure month is two digits
    const formattedDay = ('0' + item.day).slice(-2); // Ensure day is two digits
    const formattedYear = item.year;
    return `${formattedYear}-${formattedMonth}-${formattedDay}`;
  });
  
highlightedDates = this.formattedDates.map((date, index) => ({
      date: date,
      textColor: this.textColorArray[index % this.textColorArray.length], // Use modulo to cycle through colors if more dates than colors
      backgroundColor: this.backgroundColorArray[index % this.backgroundColorArray.length],
  }));

}
