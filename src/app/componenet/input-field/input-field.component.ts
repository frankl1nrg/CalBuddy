import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
  standalone:true
})
export class InputFieldComponent  implements OnInit {
  constructor() { }
  @Input() placeholder: string = 'Default Placeholder';
  ngOnInit() {}

}
