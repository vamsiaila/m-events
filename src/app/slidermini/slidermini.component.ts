import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slidermini',
  templateUrl: './slidermini.component.html',
  styleUrls: ['./slidermini.component.css']
})
export class SliderminiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sliders=[
    {id:1, url:'https://flairworksorg.files.wordpress.com/2018/03/audience-blur-blurred-background-879824-1.jpg?w=825'},
    {id:2, url:'https://www.creativiva.com/wp-content/uploads/2016/05/decor-blog-1.jpg'},
    {id:3, url:'https://i.pinimg.com/originals/26/c8/45/26c84539cd75ba32fd292ac316fbfdc1.jpg'}
  ]

}
