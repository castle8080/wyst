import { Component } from '@angular/core';
import { Authentication } from './providers/Authentication';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app works of course!';
  auth: Authentication;

  constructor(auth: Authentication) {
    this.auth = auth;
  }

}
