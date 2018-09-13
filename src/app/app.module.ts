import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './/app-routing.module';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { AdminComponent } from './admin/admin.component';
import { ServicePanelsComponent } from './service-panels/service-panels.component';
import { GoalsComponent } from './goals/goals.component';
import { CallbackComponent } from './callback/callback.component';
import { SliderminiComponent } from './slidermini/slidermini.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HomeComponent,
    MainComponent,
    AdminComponent,
    ServicePanelsComponent,
    GoalsComponent,
    CallbackComponent,
    SliderminiComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
