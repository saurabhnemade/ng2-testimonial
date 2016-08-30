import { GettingStartedSectionComponent } from './components/getting-started/getting-started.component';
import { ClockSectionComponent } from './components/clock-section.component';

import { Routes, RouterModule } from '@angular/router';

export const routes:Routes = [
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

export const routing = RouterModule.forRoot(routes, { useHash : true });