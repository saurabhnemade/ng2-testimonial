import { Component } from '@angular/core';
import { CLOCK_DIRECTIVES } from '../../../src/index';

// webpack html imports
let template = require('./clock-demo.component.html');

@Component({
    selector: 'clock-demo',
    template: template
})
export class ClockDemoComponent { }