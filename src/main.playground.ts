import 'hammerjs';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlaygroundModule } from 'angular-playground';

import { MaterialModule } from './app/shared';

PlaygroundModule
  .configure({
    selector: 'app-root',
    overlay: false,
    modules: [
      BrowserModule,
      BrowserAnimationsModule,
      MaterialModule,
    ],
  });

platformBrowserDynamic().bootstrapModule(PlaygroundModule);
