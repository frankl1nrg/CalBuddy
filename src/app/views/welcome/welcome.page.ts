import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { IonButton, IonContent } from "@ionic/angular/standalone";

@Component({
    templateUrl: 'welcome.page.html',
    styleUrls: ['welcome.page.scss'],
    standalone: true,
    imports: [IonButton, IonContent],
  })
  export class WelcomePage {
    constructor(private router: Router) {}

    toLogin(){
        this.router.navigateByUrl('login')
    }
  }