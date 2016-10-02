"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
var TimerService = (function () {
    function TimerService() {
    }
    TimerService.prototype.start = function (totalNumberOfSeconds, callback) {
        var _this = this;
        // Falls Anzahl Sekunden kleiner oder gleich 0 ist, macht der Countdown
        // kein Sinn.
        if (totalNumberOfSeconds <= 0) {
            return;
        }
        this.totalNumberOfSeconds = totalNumberOfSeconds;
        this.secondsLeft = this.totalNumberOfSeconds;
        // Timer wird hier runtergezählt.
        // timerCycle wird alle 100ms ausgeführt.
        this.theTimer = Rx_1.Observable
            .timer(0, 100)
            .subscribe(function (t) { return _this.timerCycle(callback); });
    };
    TimerService.prototype.timerCycle = function (callback) {
        this.secondsLeft = Math.round((this.secondsLeft -= 0.1) * 10) / 10;
        if (this.secondsLeft <= 0.0) {
            this.theTimer.unsubscribe();
            this.theTimer = undefined;
            if (callback)
                callback();
        }
    };
    TimerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TimerService);
    return TimerService;
}());
exports.TimerService = TimerService;
