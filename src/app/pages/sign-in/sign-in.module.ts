import { IonicModule } from '@ionic/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginPage } from './sign-in';

import { SignInRoutingModule } from './sign-in-routing.module';
import { Amplify } from 'aws-amplify';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import awsconfig from 'src/aws-exports.js';

Amplify.configure(awsconfig);
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AmplifyAuthenticatorModule,
    SignInRoutingModule
  ],
  declarations: [LoginPage]
})
export class SignInPageModule {}