import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'alert-message',
  template: '<div>Alert Message: {{message}}</div>',
  styles: [
    `
    div {
      border: 1px solid #885800;
      background-color: #ffcd3f;
      padding: 10px;
      color: red;
      margin:10px;
      font-family: Arial;

    }
    `]
})
export class AlertComponent {
  @Input () message: string;
}
