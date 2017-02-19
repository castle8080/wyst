import { Component } from '@angular/core';
import { Authentication } from './providers/Authentication';
import { ApplicationRef } from '@angular/core';

declare var gapi: any;

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

  public ngAfterViewChecked(): void {
    var element = document.getElementById("wyst-google-signin");
    if (element) {
      // Don't render the button more than once.
      if (!element.getAttribute("data-gapi-rendered")) {
        gapi.signin2.render('wyst-google-signin', {
          'scope': 'profile email',
          'width': 240,
          'height': 50,
          'longtitle': true,
          'theme': 'dark'
        });
        element.setAttribute("data-gapi-rendered", "yes");
      }
    }
  }

  public signOut(): void {
    this.auth.signOut();
  }

  public signInDisplay(): string {
    return (this.auth.isSignedIn()) ? 'none' : 'inline';
  }

  public signOutDisplay(): string {
    return (this.auth.isSignedIn()) ? 'inline' : 'none';
  }
}