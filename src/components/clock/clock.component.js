"use strict";
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
var ClockComponent = (function () {
    function ClockComponent() {
        var _this = this;
        this.dateFormat = 'hh:mm:ss';
        this.midnight = new core_1.EventEmitter(false);
        this.clock = Rx_1.Observable
            .interval(1000)
            .map(function () {
            var date = new Date();
            if (date.getHours() === 15 && date.getMinutes() === 40 && date.getSeconds() === 15) {
                _this.onMidnight();
            }
            return date;
        });
    }
    ClockComponent.prototype.onMidnight = function () {
        this.midnight.emit(this);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ClockComponent.prototype, "dateFormat", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ClockComponent.prototype, "midnight", void 0);
    ClockComponent = __decorate([
        core_1.Component({
            selector: 'axa-clock',
            template: "<div class=\"clock\"><h3 class=\"title\">Current time is</h3>{{ clock | async | date:dateFormat }}<div>",
            styles: ["\n        .title { margin: 0; }\n        .clock { background: #103184; color: #cccccc; padding: 10px; }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], ClockComponent);
    return ClockComponent;
}());
exports.ClockComponent = ClockComponent;
//# sourceMappingURL=clock.component.js.map