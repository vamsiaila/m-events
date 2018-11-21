import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes : Routes = [
  {path:'', component: MainComponent, children:[
    {path:'', component:HomeComponent},
    {
      path:'gallery',
      loadChildren:'./gallery/gallery.module#GalleryModule'
    },
    {
      path:'portfolio',
      loadChildren:'./portfolio/portfolio.module#PortfolioModule'
    },
    {
      path:'services',
      loadChildren:'./services/services.module#ServicesModule'
    },
    {
      path:'about',
      component:AboutComponent
    },
    {
      path:'contact',
      component:ContactComponent
    }
  ]
 }
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
