import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; //IonContent, IonHeader, IonTitle, IonToolbar,
import { InputFieldComponent } from 'src/app/componenet/input-field/input-field.component';
import { TagButtonsComponent } from 'src/app/componenet/tag-buttons/tag-buttons.component';
import { RepetativeEventComponent } from 'src/app/componenet/repetative-event/repetative-event.component';
import { AllDayEventComponent } from 'src/app/componenet/all-day-event/all-day-event.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'create-event-tab.page.html',
  styleUrls: ['create-event-tab.page.scss'],
  standalone: true,
  imports: [ IonicModule, CommonModule, FormsModule,InputFieldComponent,TagButtonsComponent,RepetativeEventComponent,AllDayEventComponent] //, IonHeader, IonToolbar, IonTitle, IonContent]
})
export class Tab2Page implements OnInit{
  inputTtitle = "Title" ;
  repetitiveEventToggle = false;
  locationInput ="Location or meeting url";
  allDayEventToggle =false;
  constructor() {}
  ngOnInit() {
  }
}
