import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-calender-days',
  templateUrl: './calender-days.component.html',
  styleUrls: ['./calender-days.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
  standalone:true

})
export class CalenderDaysComponent  implements OnInit {
  selectedDays: string[] = [];

  toggleSelection(day: string): void {
    const index = this.selectedDays.indexOf(day);

    if (index === -1) {
      // If not already selected, add to the array
      this.selectedDays.push(day);
    } else {
      // If already selected, remove from the array
      this.selectedDays.splice(index, 1);
    }
  }

  isSelected(day: string): boolean {
    return this.selectedDays.includes(day);
  }
  constructor() { }

  ngOnInit() {}

}
