import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CalenderDaysComponent } from '../calender-days/calender-days.component';
import { RepeatButtonsComponent } from '../repeat-buttons/repeat-buttons.component';

@Component({
  selector: 'app-repetative-event',
  templateUrl: './repetative-event.component.html',
  styleUrls: ['./repetative-event.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule,CalenderDaysComponent,RepeatButtonsComponent],
  standalone:true
})
export class RepetativeEventComponent  implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  repatativeVal = ["Don't Repeat,Day,week,Month,Year"];
radioValues: { [key: string]: boolean } = {};
selectedOption: string = ""; 
numberOfDays: number=0;
}
