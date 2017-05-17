import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
  `
    <h1>Angular app!</h1>
    <aa-databinding>
      <h2>another</h2>
    </aa-databinding>
  `,

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works! Great job!';
}
