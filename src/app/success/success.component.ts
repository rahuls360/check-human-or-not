import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  template: `<p>Success!! You are a human</p>`,
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
