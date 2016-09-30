import { Component, Input, Output, EventEmitter, Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Injectable()
export class TimerService {
    private totalNumberOfSeconds : number;
    public secondsLeft : number;
    private theTimer : Subscription;

    constructor() {}

    public start(totalNumberOfSeconds : number, callback? : any) : void{
        // Falls Anzahl Sekunden kleiner oder gleich 0 ist, macht der Countdown
        // kein Sinn.
        if(totalNumberOfSeconds <= 0){
            return;
        }

        this.totalNumberOfSeconds = totalNumberOfSeconds;
        this.secondsLeft = this.totalNumberOfSeconds;

        // Timer wird hier runtergezählt.
        // timerCycle wird alle 100ms ausgeführt.
        this.theTimer = Observable
            .timer(0, 100)
            .subscribe(t => this.timerCycle(callback));
    }

    private timerCycle(callback : any) : void {
        this.secondsLeft = Math.round((this.secondsLeft -= 0.1) * 10) / 10;

        if(this.secondsLeft <= 0.0){
            this.theTimer.unsubscribe();
            this.theTimer = undefined;
            if (callback) callback();
        }
    }

}