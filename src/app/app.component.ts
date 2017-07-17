import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    // require('material-components-web/dist/material-components-web.css'),
    // '../styles.css',
    // '../../node_modules/material-components-web/dist/material-components-web.css',
    './app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app works!';
  //https://getmdl.io/templates/android-dot-com/index.html#screens
}
