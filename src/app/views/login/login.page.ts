import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { Auth, Amplify } from 'aws-amplify';
import { Hub, HubCapsule } from '@aws-amplify/core';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, AmplifyAuthenticatorModule],
})
export class LogInPage implements OnInit {
  constructor(private router: Router) {}

    ngOnInit() {
      Hub.listen('auth', (data: HubCapsule) => {
        const { channel, payload } = data;
        if (channel === 'auth' && (payload.event === 'signIn' || payload.event === 'signUp')){
          this.handleSignIn();
        }
      });
      this.handleSignIn();
    }
    toWelcomePage () {
      this.router.navigate(['/welcome']);
    }
    async handleSignIn() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        if (user) {
          this.router.navigate(['/tabs']); // Change '/tabs' to your desired route
        }
      } catch (error) {
        console.error('Error getting authenticated user: ', error);
        // Handle unauthenticated user scenario
      }
    }
}