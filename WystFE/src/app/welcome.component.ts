import { Component, ApplicationRef } from '@angular/core';
import { Router } from '@angular/router';
import { Authentication } from './providers/Authentication';

@Component({
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
  constructor(public auth: Authentication) {
  }
}