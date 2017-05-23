import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>
    {{title}}
  </h1>
  <app-tasks-list></app-tasks-list>
  `,
  styles: []
})
export class AppComponent {
  title = 'app works!';
}
