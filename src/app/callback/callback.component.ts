import { Component, OnInit } from '@angular/core';
import { ToasterService } from '../shared/services/toaster.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(private toaster:ToasterService) { }

  ngOnInit() {
  }

  submit(){
    console.log('clicked')
    this.toaster.success('hello','thankyou for registering');
  }

}
