import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() code;

  constructor() { }

  ngOnInit() {
  }

  checkCode = function () {
    if (document.getElementById("result").value == '{{answer}}') {
      console.log("Yes")
    } else {
      console.log("No");
    }
  }

}
