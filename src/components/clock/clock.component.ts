import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'axa-clock',
    template: `<div class="clock"><h3 class="title">Current time is</h3>{{ clock | async | date:'medium' }}<div>`,
    styles: [`
        .title { margin: 0; }
        .clock { background: #103184; color: #cccccc; padding: 10px; }
    `]
})

export class ClockComponent {    
    clock = Observable
        .interval(1000)
        .map(()=> new Date());
} 