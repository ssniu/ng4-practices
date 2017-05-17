import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aa-another',
  template: `
    <h2>another</h2>
    <p>
      another Works!
    </p>
  `,
  styles: [`
  p { color: green;
  }`]
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
