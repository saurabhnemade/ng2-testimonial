"use strict";
var core_1 = require('@angular/core');
var index_1 = require('../../../src/index');
// webpack html imports
var template = require('./clock-demo.component.html');
var ClockDemoComponent = (function () {
    function ClockDemoComponent() {
    }
    ClockDemoComponent = __decorate([
        core_1.Component({
            selector: 'clock-demo',
            template: template,
            directives: [index_1.CLOCK_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], ClockDemoComponent);
    return ClockDemoComponent;
}());
exports.ClockDemoComponent = ClockDemoComponent;
//# sourceMappingURL=clock-demo.component.js.map