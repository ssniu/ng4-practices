import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  template: `
    <button (click)="onClicked()">Click me!</button>
  `,
  styles: []
})
export class EventbindingComponent{

  @Output() clicked = new EventEmitter<string>();

  onClicked(){
     this.clicked.emit('It worked!');
  }
}
