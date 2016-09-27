import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
export declare class ClockComponent {
    dateFormat: string;
    midnight: EventEmitter<ClockComponent>;
    clock: Observable<Date>;
    private onMidnight();
}
