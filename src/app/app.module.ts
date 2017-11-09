import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// unit testing - testing the component w/o any template, api, nothing.
// If the component is using a service to talk to API's, we make a fake service in our unit test. Same with routing.
// - easiest to write but dont give us much confidence.

// Integration Testing - tesing a component WITH template. API + routing is still faked.

// E2E - test everything in the app. Very slow. Very fragile.

// What we want is to write E2E tests for the key parts of the app, and write integration/unit tests for the other stuff.


//describe defines a suite, which defines a group of related tests.
// it defines a spec

// TESTS SHOULD NOT BE FRAGILE

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
