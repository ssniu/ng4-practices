import {Component} from '@angular/core';

@Component({
  selector: 'app-another',
  template:`
    <p>This is a third message</p>
  `,
  styles:[
  `
    p {
      background-color: gray;
      border: 2px solid red;
      padding: 15px;
    }
  `
  ]
})

export class AnotherComponent{

}
