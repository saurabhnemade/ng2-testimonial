import { Component } from '@angular/core';

@Component({
    selector: 'axa-clock',
    template: `<div>{{ time }}<div>`
})

export class ClockComponent {    
    time = new Date().getTime();
} 