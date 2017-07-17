import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

// import * as mdc from 'material-components-web/dist/material-components-web.js'
var mdc = require('material-components-web/dist/material-components-web.js')

if (environment.production) {
  enableProdMode();
}

mdc.autoInit()

platformBrowserDynamic().bootstrapModule(AppModule);
