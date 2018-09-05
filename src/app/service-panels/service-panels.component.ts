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

  services=[1,2,3]

}
