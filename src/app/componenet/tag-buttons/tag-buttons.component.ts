import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tag-buttons',
  templateUrl: './tag-buttons.component.html',
  styleUrls: ['./tag-buttons.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
  standalone:true
})
export class TagButtonsComponent  implements OnInit {
  trackItems(index: number, itemObject: any) {
    return itemObject.id;
  }
  // this tag name can be changed or imported
 items = ['Fitness', 'Me Time', 'Family', 'Friends', 'Work', 'Health','Hobby','Travel'];
// the colors can be provided with tag names to match dynamic data
  tagColors: string[] = [];

  constructor() {
    this.generateRandomColors();
  }
  generateRandomColors(): void {
    // for now, colors are given and changing randomly for each tags
    const predefinedColors = ['#ffca7b', '#ff7251', '#aad688', '#929a68', '#eefdbd','#ccfddd'];

    // Assign colors to tags
    this.tagColors = this.items.map(() => {
      const randomIndex = Math.floor(Math.random() * predefinedColors.length);
      return predefinedColors[randomIndex];
    });
  }

  ngOnInit() {}

}
