"use strict";
var core_1 = require('@angular/core');
var clock_1 = require('./components/clock');
var NG2_COMPONENT_STARTER_DIRECTIVES = [clock_1.CLOCK_DIRECTIVES];
var ClockModule = (function () {
    function ClockModule() {
    }
    ClockModule = __decorate([
        core_1.NgModule({
            declarations: NG2_COMPONENT_STARTER_DIRECTIVES,
            exports: NG2_COMPONENT_STARTER_DIRECTIVES
        }), 
        __metadata('design:paramtypes', [])
    ], ClockModule);
    return ClockModule;
}());
exports.ClockModule = ClockModule;
//# sourceMappingURL=module.js.map