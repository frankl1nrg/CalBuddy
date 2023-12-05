import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-all-day-event',
  templateUrl: './all-day-event.component.html',
  styleUrls: ['./all-day-event.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
  standalone:true
})
export class AllDayEventComponent  implements OnInit {
  // showDefaultButtons = false;
  constructor() { }

  ngOnInit() {}

}
