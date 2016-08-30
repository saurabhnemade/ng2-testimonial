"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var clock_demo_1 = require('./clock/clock-demo');
var demo_section_1 = require('./demo-section');
// webpack html imports
var doc = require('../../src/components/clock/readme.md');
var titleDoc = require('../../src/components/clock/title.md');
var ts = require('!!raw?lang=typescript!./clock/clock-demo.ts');
var html = require('!!raw?lang=markup!./clock/clock-demo.html');
var ClockSectionComponent = (function () {
    function ClockSectionComponent() {
        this.name = 'Clock';
        this.src = 'https://github.com/axa-ch/ng2-component-starter/tree/master/src/components/clock';
        this.html = html;
        this.ts = ts;
        this.titleDoc = titleDoc;
        this.doc = doc;
    }
    ClockSectionComponent = __decorate([
        core_1.Component({
            selector: 'clock-section',
            directives: [demo_section_1.DemoSectionComponent, clock_demo_1.ClockDemoComponent, common_1.CORE_DIRECTIVES],
            template: "\n    <demo-section [name]=\"name\" [src]=\"src\" [titleDoc]=\"titleDoc\" [html]=\"html\" [ts]=\"ts\" [doc]=\"doc\">\n      <clock-demo></clock-demo>\n    </demo-section>"
        }), 
        __metadata('design:paramtypes', [])
    ], ClockSectionComponent);
    return ClockSectionComponent;
}());
exports.ClockSectionComponent = ClockSectionComponent;
//# sourceMappingURL=clock-section.js.map