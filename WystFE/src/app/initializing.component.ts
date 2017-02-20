import { Component } from '@angular/core';

@Component({
  templateUrl: './initializing.component.html'
})
export class InitializingComponent {
    constructor() {
        console.log("initialzing the app!");
    }
}