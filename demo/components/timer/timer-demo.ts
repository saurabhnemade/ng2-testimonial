import { Component } from '@angular/core';
import { TimerService } from '../../../src/components/timer/timer.service';

// webpack html imports
let template = require('./timer-demo.html');

@Component({
    template: template,
    selector: 'timer-demo',
    providers: [TimerService]
})

export class TimerDemoComponent {
    public numberOfSeconds : number;
    public text : string;
    constructor(public timerService:TimerService){}

    public start() : void {
        this.timerService.start(this.numberOfSeconds);
    }
}