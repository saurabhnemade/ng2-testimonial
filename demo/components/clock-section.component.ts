import { Component } from '@angular/core';

import { ClockDemoComponent } from './clock-demo/clock-demo.component';
import { DemoSectionComponent } from './demo-section/demo-section.component';

// webpack html imports
let doc = require('../../src/components/clock/readme.md');
let titleDoc = require('../../src/components/clock/title.md');
let ts = require('!!raw?lang=typescript!./clock-demo/clock-demo.component.ts');
let html = require('!!raw?lang=markup!./clock-demo/clock-demo.component.html');

@Component({
  selector: 'clock-section',
  template: `
    <demo-section [name]="name" [src]="src" [titleDoc]="titleDoc" [html]="html" [ts]="ts" [doc]="doc">
      <clock-demo></clock-demo>
    </demo-section>`
})

export class ClockSectionComponent {
  public name: string = 'Clock';
  public src: string = 'https://github.com/saurabhnemade/ng2-testimonial/tree/master/src/components/ng2-testimonial';
  public html: string = html;
  public ts: string = ts;
  public titleDoc: string = titleDoc;
  public doc: string = doc;
}
