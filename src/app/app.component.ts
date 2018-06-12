import {Component, Injector} from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>Welcome to {{ title }}!</h1>',
  styles: [
    `
    #message-container {
      background: #b4e5ff;
      padding: 5px;
      min-height: 50px;
    }
    `
  ]
})
export class AppComponent {
  title = 'Angular Elements';
  content = null;
}
