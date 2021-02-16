import {Component} from '@angular/core';

@Component({
  selector : 'pm-root',
  template : `
  <div>
  <h1>
    Welcome to {{pageTitle}}
  </h1>
  ... Stater Files..
</div>
  `
})
export class AppComponent{
  pageTitle : string = "Acme Product Management";
}