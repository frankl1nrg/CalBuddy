import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

import { Amplify } from 'aws-amplify';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import awsconfig from 'src/aws-exports';
import { Router } from '@angular/router';

Amplify.configure(awsconfig);

@Component({
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, AmplifyAuthenticatorModule],
})
export class LogInPage {
  
  constructor(private router: Router) {}

    toWelcomePage(){
        this.router.navigateByUrl('welcome')
    }
}