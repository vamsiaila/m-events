import { Component, OnInit } from '@angular/core';

declare let $:any;
@Component({
  selector: 'app-service-panels',
  templateUrl: './service-panels.component.html',
  styleUrls: ['./service-panels.component.css']
})
export class ServicePanelsComponent implements OnInit {
  constructor() { 
  }

  ngOnInit() {

  }

  bgImg="http://cdn.shutterstock.com/shutterstock/videos/4310102/thumb/1.jpg";

  services=[
    {title:'Wedding Events', description:'', background:'https://timeskerala.com/wp-content/uploads/2017/10/50747Love-Marriage-Specialist.png'},
    {title:'Birthdays', description:'', background:'http://royalpalmocc.com.sg/wp-content/uploads/2017/03/Events-Birthday-Parties.png'},
    {title:'DJ Nights', description:'', background:'http://www.vertigopark.co.uk/wp-content/uploads/2017/02/dj.jpg'},
    {title:'Kitty Parties', description:'', background:'http://www.withloveevents.in/images/kitty.jpg'},
    {title:'Entertainmet Shows', description:'', background:'https://elarose.com/images/shows_entertainment/shows_1-7c9913d6.jpg'},
    {title:'Catering', description:'', background:'https://static.wixstatic.com/media/e4dedd_72b0881bc20d6ac5a9e4aa3ecd6f210a.jpg/v1/fill/w_733,h_547,al_c,q_85,usm_0.66_1.00_0.01/e4dedd_72b0881bc20d6ac5a9e4aa3ecd6f210a.webp'},
    {title:'Photography', description:'', background:'https://pdnpulse.pdnonline.com/wp-content/uploads/2017/08/pexels-photo-90368.jpeg'},
    {title:'Surprice Events', description:'', background:'http://www.musical-opereta.cz/wp-content/uploads/2018/01/Nov%C3%BD-rok.jpg'}
  ]

}
