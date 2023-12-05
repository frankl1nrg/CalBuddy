import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-repeat-buttons',
  templateUrl: './repeat-buttons.component.html',
  styleUrls: ['./repeat-buttons.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
  standalone:true
})
export class RepeatButtonsComponent  implements OnInit {
  @Input() buttonText: string = '';
  constructor() { }

  ngOnInit() {}

}
