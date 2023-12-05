import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Auth } from 'aws-amplify';
import { async } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit{
  constructor() {}


    ngOnInit() {
      this.checkUser();
    }
  
    async checkUser() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        console.log('User:', user);
        // User is signed in
      } catch (error) {
        console.error('User not signed in');
        // User is not signed in or session expired
        // Handle redirection to sign-in page or re-authentication
      }
    }
  
}
