import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { TelemetryComponent } from './telemetry/telemetry.component';
import {SampleService} from './sample.service'
import { HttpClientModule } from '@angular/common/http';
import { SubscriptionComponent } from './subscription/subscription.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ListComponent,
    TelemetryComponent,
    SubscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    SampleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
