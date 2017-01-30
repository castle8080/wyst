import { Component } from '@angular/core';
import { Authentication } from './providers/Authentication';
import { ApplicationRef } from '@angular/core';

@Component({
  templateUrl: './signin.component.html'
})
export class SigninComponent {

  auth: Authentication;

  constructor(auth: Authentication, appRef: ApplicationRef) {
    console.log("auth component!");
    this.auth = auth;
    this.auth.onUserChange(() => {
      console.log("force update!");
      // force ui update.
      appRef.tick();
    });
  }

  signOut() {
    this.auth.signOut();
  }

  signInDisplay(): string {
    return (this.auth.isSignedIn()) ? 'none' : 'inline';
  }

  signOutDisplay(): string {
    return (this.auth.isSignedIn()) ? 'inline' : 'none';
  }
}