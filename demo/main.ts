import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app.module';

// todo: enable prod mod only for prod build
if (ENV) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
