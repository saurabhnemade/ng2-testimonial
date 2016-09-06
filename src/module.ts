import { NgModule } from '@angular/core';
import { CLOCK_DIRECTIVES } from './components/clock';
import { TIMER_DIRECTIVES } from './components/timer';

const NG2_COMPONENT_STARTER_DIRECTIVES = [ CLOCK_DIRECTIVES, TIMER_DIRECTIVES ]

@NgModule({
  declarations: NG2_COMPONENT_STARTER_DIRECTIVES,
  exports: NG2_COMPONENT_STARTER_DIRECTIVES
})

export class ClockModule { }