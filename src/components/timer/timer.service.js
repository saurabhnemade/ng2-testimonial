"use strict";
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
//# sourceMappingURL=timer.service.js.map