import { Component } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './sign-in.html',
})
export class LoginPage {

  constructor(private router: Router) { }
  
  email: string = "";
  password: string = "";
  
  async signIn(email: string, password: string) {
    try {
        const user = await Auth.signIn(email, password);
        console.log('User logged in:', user);
        this.router.navigate(['/tabs']);
    } catch (error) {
        console.log('Error logging in', error);
    }
  }

  async signInWithGoogle() {
  }

  async signInWithApple() {

  }
}