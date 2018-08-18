import { Component, OnInit } from '@angular/core';


declare let $:any;
@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.css']
})
export class MobileNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.toggle').on('click', function(e) {
      $('.wrapper').toggleClass('open');
    
      e.preventDefault();
    });
  }

}
