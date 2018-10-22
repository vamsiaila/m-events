import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MobileNavbarComponent } from './components/mobile-navbar/mobile-navbar.component';
import { ToasterService } from './services/toaster.service';
import { OverlayComponent } from './components/overlay/overlay.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MainNavbarComponent, 
    FooterComponent, 
    MobileNavbarComponent, 
    OverlayComponent, 
    BannerComponent
  ],
  exports:[
    MainNavbarComponent, 
    FooterComponent, 
    MobileNavbarComponent, 
    OverlayComponent, 
    BannerComponent
  ],
  providers:[
    ToasterService
  ]
})
export class SharedModule { }
