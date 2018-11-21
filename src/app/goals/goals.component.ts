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

  bgImg="https://www.desktopbackground.org/download/o/2013/09/12/637424_plain-coloured-backgrounds-wallpapers-zone_1024x768_h.png";

  ngOnInit() {
  }

}
