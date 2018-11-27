import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment1-warning-success';
  answer = 'dsajf24';
  userInput = "";
  flag = 0;

  checkCode = function () {
    this.flag = 1;
    if (this.userInput == this.answer) {
      this.final = true;
    } else {
      this.final = false;
    }
  }
}
