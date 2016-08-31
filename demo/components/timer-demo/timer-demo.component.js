"use strict";
var core_1 = require('@angular/core');
var timer_service_1 = require('../../../src/components/timer/timer.service');
// webpack html imports
var template = require('./timer-demo.component.html');
var TimerDemoComponent = (function () {
    function TimerDemoComponent(timerService) {
        this.timerService = timerService;
    }
    TimerDemoComponent.prototype.start = function () {
        this.timerService.start(this.numberOfSeconds);
    };
    TimerDemoComponent = __decorate([
        core_1.Component({
            template: template,
            selector: 'timer-demo',
            providers: [timer_service_1.TimerService]
        }), 
        __metadata('design:paramtypes', [timer_service_1.TimerService])
    ], TimerDemoComponent);
    return TimerDemoComponent;
}());
exports.TimerDemoComponent = TimerDemoComponent;
//# sourceMappingURL=timer-demo.component.js.map