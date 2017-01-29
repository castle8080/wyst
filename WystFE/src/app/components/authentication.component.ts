import { Component } from '@angular/core';
import { Authentication } from '../providers/Authentication';
import { ApplicationRef } from '@angular/core';

@Component({
  selector: 'w-authentication',
  template: `
    <div [ngStyle]="{'display': signInDisplay()}">
      <div class="g-signin2"></div>
    </div>
    <div [ngStyle]="{'display': signOutDisplay()}">
      <button (click)="signOut()">[Sign Out]</button>
    </div>
  `
})
export class AuthenticationComponent {

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