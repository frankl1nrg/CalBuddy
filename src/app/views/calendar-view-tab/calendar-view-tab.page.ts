import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonRouterOutlet, IonGrid, IonCol, IonRow, IonDatetime } from '@ionic/angular/standalone';
import { ActivityCardComponent } from './components/activity-card/activity-card.component';
import { RouterModule } from '@angular/router';
import { MonthViewComponent } from './views/month-view/month-view.component';
import { ChangeViewChipsComponent } from './components/change-view-chips/change-view-chips.component';
import { APIService } from 'src/app/services/API.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'calendar-view-tab.page.html',
  styleUrls: ['calendar-view-tab.page.scss'],
  standalone: true,
  imports: [RouterModule,IonGrid,IonCol,IonRow,IonHeader, IonToolbar, IonTitle, IonContent,IonRouterOutlet,ActivityCardComponent, MonthViewComponent, ChangeViewChipsComponent, IonDatetime],
})
export class Tab3Page {
  // constructor(private apiService: APIService) {}
  
//   ngOnInit(): void {
//     this.getAcademicEvents();
//   }


//   events:any=[]

//   async getAcademicEvents() {
//   try {
//     const response_academic = await this.apiService.ListAcademicEvents();
//     console.log(this.events= response_academic.items);
//     // Process response here
//   } catch (error) {
//     console.error(error);
//     // Handle error here
//   }
// }

}
