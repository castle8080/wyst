import { Component, ApplicationRef } from '@angular/core';
import { Router } from '@angular/router';
import { Authentication } from './providers/Authentication';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private auth: Authentication, private router: Router, private appRef: ApplicationRef) {
    auth.onUserChange(() => {
      if (auth.isSignedIn()) {
        router.navigate(['/welcome']);
      }
      else {
        router.navigate(['/signin']);
      }
      appRef.tick();
    });
  }
}
