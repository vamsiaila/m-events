import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MobileNavbarComponent } from './components/mobile-navbar/mobile-navbar.component';
import { ToasterService } from './services/toaster.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainNavbarComponent, FooterComponent, MobileNavbarComponent],
  exports:[MainNavbarComponent,MobileNavbarComponent],
  providers:[
    ToasterService
  ]
})
export class SharedModule { }
