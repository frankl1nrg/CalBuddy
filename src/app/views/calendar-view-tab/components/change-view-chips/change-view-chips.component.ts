import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonChip, IonCol, IonContent, IonGrid, IonRow } from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';





@Component({
  selector: 'change-view-chips',
  standalone: true,
  imports: [CommonModule,IonGrid,IonChip,IonRow,IonCol,IonContent,RouterModule],
  templateUrl: './change-view-chips.component.html',
  styleUrls: ['./change-view-chips.component.css']
})
export class ChangeViewChipsComponent {
  dateHeader:Date = new Date();
  formattedDateHeader = this.dateHeader.toLocaleDateString('en-US',{ day:'numeric',month: 'long',year: 'numeric', });
}
