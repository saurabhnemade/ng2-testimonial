"use strict";
var core_1 = require('@angular/core');
var ClockComponent = (function () {
    function ClockComponent() {
        this.time = new Date().getTime();
    }
    ClockComponent = __decorate([
        core_1.Component({
            selector: 'axa-clock',
            template: "<div>{{ time }}<div>"
        }), 
        __metadata('design:paramtypes', [])
    ], ClockComponent);
    return ClockComponent;
}());
exports.ClockComponent = ClockComponent;
//# sourceMappingURL=clock.component.js.map