import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sliders=[
    {id:1, url:'https://lh3.googleusercontent.com/-3ybCFPXKAhA/Ve86-gENZ0I/AAAAAAAAADA/Z5rlXyjVI1o/w1920-h1080/contour%2Bresort%2Bwedding%2Bstage%2Bpentecostal.jpg'},
    {id:2, url:'https://www.creativiva.com/wp-content/uploads/2016/05/decor-blog-1.jpg'},
    {id:3, url:'https://i.pinimg.com/originals/26/c8/45/26c84539cd75ba32fd292ac316fbfdc1.jpg'}
  ]


}
