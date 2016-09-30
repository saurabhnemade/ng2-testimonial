import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CLOCK_DIRECTIVES } from './components/clock';
import { TIMER_DIRECTIVES } from './components/timer';

const NG2_COMPONENT_STARTER_DIRECTIVES = [ CLOCK_DIRECTIVES /*, TIMER_DIRECTIVES */ ]

@NgModule({
  declarations: NG2_COMPONENT_STARTER_DIRECTIVES,
  imports: [ CommonModule ],
  exports: NG2_COMPONENT_STARTER_DIRECTIVES,
  providers: [ TIMER_DIRECTIVES ]
})

export class ClockModule { }