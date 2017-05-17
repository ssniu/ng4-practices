import {Component} from '@angular/core';

@Component({
  selector: 'app-warning',
  template:`
    <p>This is a warning message</p>
  `,
  styles:[
  `
    p {
      background-color: teal;
      border: 2px solid blue;
      padding: 15px;
    }
  `
  ]
})

export class WarningComponent{

}
