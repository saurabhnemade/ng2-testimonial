"use strict";
var core_1 = require('@angular/core');
var index_1 = require('../../../src/index');
var ClockDemoComponent = (function () {
    function ClockDemoComponent() {
    }
    ClockDemoComponent = __decorate([
        core_1.Component({
            selector: 'component-demo',
            template: require('./clock-demo.html'),
            directives: [index_1.CLOCK_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], ClockDemoComponent);
    return ClockDemoComponent;
}());
exports.ClockDemoComponent = ClockDemoComponent;
//# sourceMappingURL=clock-demo.js.map