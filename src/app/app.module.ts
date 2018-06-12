import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent, AlertComponent],
  imports: [BrowserModule],
  entryComponents: [ButtonComponent, AlertComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const customButton = createCustomElement(ButtonComponent, { injector: this.injector });
    customElements.define('my-button', customButton);

    const alertElement = createCustomElement(AlertComponent, { injector: this.injector});
    customElements.define('my-alert', alertElement);
  }
}
