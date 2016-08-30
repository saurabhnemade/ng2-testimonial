import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

import {TimerDemoComponent} from './timer/timer-demo';
import {DemoSectionComponent} from './demo-section';

// webpack html imports
let doc = require('../../src/components/timer/readme.md');
let titleDoc = require('../../src/components/timer/title.md');
let ts = require('!!raw?lang=typescript!./timer/timer-demo.ts');
let html = require('!!raw?lang=markup!./timer/timer-demo.html');

@Component({
  selector: 'timer-section',
  directives: [DemoSectionComponent, TimerDemoComponent, CORE_DIRECTIVES],
  template: `
    <demo-section [name]="name" [src]="src" [titleDoc]="titleDoc" [html]="html" [ts]="ts" [doc]="doc">
      <timer-demo></timer-demo>
    </demo-section>`
})
export class TimerSectionComponent {
  public name:string = 'Timer';
  public src:string = 'https://github.com/axa-ch/ng2-component-starter/tree/master/src/components/timer';
  public html:string = html;
  public ts:string = ts;
  public titleDoc:string = titleDoc;
  public doc:string = doc;
}