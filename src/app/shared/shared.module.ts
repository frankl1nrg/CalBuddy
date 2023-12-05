import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { IonTabs, IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    FooterComponent
  ]
})
export class SharedModule { }
