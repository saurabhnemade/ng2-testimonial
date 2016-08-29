import {GettingStartedSectionComponent} from './components/getting-started/getting-started';
import {ClockSectionComponent} from './components/clock-section';

import {provideRouter, RouterConfig} from '@angular/router';

export const routes:RouterConfig = [
  {
    path: '',
    data: ['Getting started'],
    component: GettingStartedSectionComponent
  }, {
    path: 'clock',
    data: ['Clock'],
    component: ClockSectionComponent
  }, {
    path: '**',
    redirectTo: '/'
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];