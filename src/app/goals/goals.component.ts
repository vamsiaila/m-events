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

  ngOnInit() {
  }

}
