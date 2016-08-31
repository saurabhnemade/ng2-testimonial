import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

import {TimerDemoComponent} from './timer-demo/timer-demo.component';

// webpack html imports
let doc = require('../../src/components/timer/readme.md');
let titleDoc = require('../../src/components/timer/title.md');
let ts = require('!!raw?lang=typescript!./timer-demo/timer-demo.component.ts');
let html = require('!!raw?lang=markup!./timer-demo/timer-demo.component.html');

@Component({
  selector: 'timer-section',
  directives: [TimerDemoComponent, CORE_DIRECTIVES],
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