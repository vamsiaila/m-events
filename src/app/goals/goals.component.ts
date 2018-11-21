import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  width;
  constructor() { 
    this.width = window.screen.width;
  }

  bgImg="https://www.apmsolutions.ca/wp-content/uploads/2017/03/background-image-of-web-design-meeting.png";

  ngOnInit() {
  }

}
