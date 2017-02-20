import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApplicationRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { Authentication } from './providers/Authentication';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin.component';
import { WelcomeComponent } from './welcome.component';
import { InitializingComponent } from './initializing.component';

const appRoutes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'initializing', component: InitializingComponent },
  { path: '', redirectTo: "/initializing", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    WelcomeComponent,
    InitializingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [Authentication],
  bootstrap: [AppComponent]
})
export class AppModule {
}