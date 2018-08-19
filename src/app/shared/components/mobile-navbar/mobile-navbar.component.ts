import { Component, OnInit } from '@angular/core';


declare let $:any;
@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.css']
})
export class MobileNavbarComponent implements OnInit {

  constructor() { }

  isOpen=false;

  toggleMenu(){
    this.isOpen = this.isOpen?false:true;
  }

  ngOnInit() {
    
  }

}
