import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { GalleryModule } from './gallery/gallery.module';
import { ServicesModule } from './services/services.module';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HomeModule,
    AboutModule,
    ContactModule,
    GalleryModule,
    ServicesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
