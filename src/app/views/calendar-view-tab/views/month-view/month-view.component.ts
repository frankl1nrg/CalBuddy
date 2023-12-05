import { Component } from '@angular/core';
import { ActivityCardComponent } from '../../components/activity-card/activity-card.component';
import { IonContent, IonDatetime, IonItem, IonCol, IonRow, IonGrid } from '@ionic/angular/standalone';
import { ChangeViewChipsComponent } from '../../components/change-view-chips/change-view-chips.component';
import { APIService } from 'src/app/services/API.service';
import { cloudyNight } from 'ionicons/icons';


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
  
  constructor(private apiService: APIService) {}
  
  transformEventsToActivitiesPerDay(events: any[]) {
    const activitiesPerDay: { [key: string]: any } = {};

    events.forEach(event => {
        // Extract date parts
        const startDate = new Date(event.startDatetime);
        const endDate = new Date(event.endDatetime);
        const month = (startDate.getMonth() + 1).toString().padStart(2, '0');
        const day = startDate.getDate().toString().padStart(2, '0');
        const year = startDate.getFullYear().toString();

        // Format time
        const timeStart = startDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        const timeEnd = endDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

        // Create activity object
        const activity = {
            name: event.name,
            timeStart: timeStart,
            timeEnd: timeEnd,
            tags: event.tags
        };

        // Key for grouping
        const key = `${month}-${day}-${year}`;

        // Group by date
        if (!activitiesPerDay[key]) {
            activitiesPerDay[key] = {
                month: month,
                day: day,
                year: year,
                activities: [activity]
            };
        } else {
            activitiesPerDay[key].activities.push(activity);
        }
    });

    // Convert to array
    return    Object.values(activitiesPerDay);
}


  ngOnInit(): void {
    this.getAcademicEvents();
  }


  events:any=[]


  tranformedEvents:any = []
  
  async getAcademicEvents() {
    try {
      const response_academic = await this.apiService.ListAcademicEvents();
      console.log(this.events= response_academic.items);
      this.tranformedEvents = this.transformEventsToActivitiesPerDay(this.events);
      
      this.formattedDates  = this.tranformedEvents.map((item:any) => {
        const formattedMonth = item.month // Ensure month is two digits
        const formattedDay = item.day; // Ensure day is two digits
        const formattedYear = item.year;
        return `${formattedYear}-${formattedMonth}-${formattedDay}`;
      });

      this.highlightedDates = this.formattedDates.map((date: any, index: any) => ({
      date: date,
      textColor: this.textColorArray[index % this.textColorArray.length], // Use modulo to cycle through colors if more dates than colors
      backgroundColor: this.backgroundColorArray[index % this.backgroundColorArray.length],
    }));

    } catch (error) {
      console.error(error);
      // Handle error here
    }
  }

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

private formattedDates = []
  
public highlightedDates:any = []



}
