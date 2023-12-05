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
    }
    toWelcomePage () {
      this.router.navigate(['/welcome']);
    }
    handleSignIn() {
      this.router.navigate(['/tabs']); // Change '/home' to your desired route
    }
}