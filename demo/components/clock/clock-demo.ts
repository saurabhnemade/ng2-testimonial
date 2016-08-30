import { Component } from '@angular/core';
import { CLOCK_DIRECTIVES } from '../../../src/index';
import { TimerService } from '../../../src/components/timer/timer.service';

// webpack html imports
let template = require('./clock-demo.html');

@Component({
    selector: 'clock-demo',
    template: template,
    directives: [CLOCK_DIRECTIVES],
    providers: [TimerService]
})

export class ClockDemoComponent {
    public text : string;
    constructor(public timerService:TimerService){}

    public start() : void {
        this.text = 'timer started';
        this.timerService.start(5, this.timerEnded);
    }

    public timerEnded() : void{
        this.text = 'timer stopped';
    }
}