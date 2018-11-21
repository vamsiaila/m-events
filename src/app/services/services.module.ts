import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { MainComponent } from './main/main.component';
import { MainServicesComponent } from './main-services/main-services.component';
import { ViewServiceComponent } from './view-service/view-service.component';

@NgModule({
  imports: [
    CommonModule,
    ServicesRoutingModule
  ],
  declarations: [
    MainComponent, 
    MainServicesComponent, 
    ViewServiceComponent
  ]
})
export class ServicesModule { }
