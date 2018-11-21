import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  constructor() { }

  bgImg="https://milwaukeesynod.org/wp-content/uploads/light-background-5.jpg";

  ngOnInit() {
  }

  testings=[1,2,3,4,5,6];

}
