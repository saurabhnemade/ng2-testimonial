"use strict";
var core_1 = require('@angular/core');
var index_1 = require('../../../src/index');
var timer_service_1 = require('../../../src/components/timer/timer.service');
// webpack html imports
var template = require('./clock-demo.html');
var ClockDemoComponent = (function () {
    function ClockDemoComponent(timerService) {
        this.timerService = timerService;
    }
    ClockDemoComponent.prototype.start = function () {
        this.text = 'timer started';
        this.timerService.start(5, this.timerEnded);
    };
    ClockDemoComponent.prototype.timerEnded = function () {
        this.text = 'timer stopped';
    };
    ClockDemoComponent = __decorate([
        core_1.Component({
            selector: 'clock-demo',
            template: template,
            directives: [index_1.CLOCK_DIRECTIVES],
            providers: [timer_service_1.TimerService]
        }), 
        __metadata('design:paramtypes', [timer_service_1.TimerService])
    ], ClockDemoComponent);
    return ClockDemoComponent;
}());
exports.ClockDemoComponent = ClockDemoComponent;
//# sourceMappingURL=clock-demo.js.map