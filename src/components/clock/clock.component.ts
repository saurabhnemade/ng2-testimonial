import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'axa-clock',
    template: `<div class="clock"><h3 class="title">Current time is</h3>{{ clock | async | date:dateFormat }}<div>`,
    styles: [`
        .title { margin: 0; }
        .clock { background: #103184; color: #cccccc; padding: 10px; }
    `]
})

export class ClockComponent {  
    @Input() public dateFormat:string = 'hh:mm:ss';

    @Output() public midnight:EventEmitter<ClockComponent> = new EventEmitter<ClockComponent>(false);

    clock = Observable
        .interval(1000)
        .map(()=> {            
            let date = new Date();

            if (date.getHours() === 9 && date.getMinutes() === 12 && date.getSeconds() === 15) {
                this.onMidnight();
            }        
            return date;
        });

    private onMidnight():void {
        this.midnight.emit(this);
    }
}