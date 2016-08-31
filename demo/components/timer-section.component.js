"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var timer_demo_component_1 = require('./timer-demo/timer-demo.component');
// webpack html imports
var doc = require('../../src/components/timer/readme.md');
var titleDoc = require('../../src/components/timer/title.md');
var ts = require('!!raw?lang=typescript!./timer-demo/timer-demo.component.ts');
var html = require('!!raw?lang=markup!./timer-demo/timer-demo.component.html');
var TimerSectionComponent = (function () {
    function TimerSectionComponent() {
        this.name = 'Timer';
        this.src = 'https://github.com/axa-ch/ng2-component-starter/tree/master/src/components/timer';
        this.html = html;
        this.ts = ts;
        this.titleDoc = titleDoc;
        this.doc = doc;
    }
    TimerSectionComponent = __decorate([
        core_1.Component({
            selector: 'timer-section',
            directives: [timer_demo_component_1.TimerDemoComponent, common_1.CORE_DIRECTIVES],
            template: "\n    <demo-section [name]=\"name\" [src]=\"src\" [titleDoc]=\"titleDoc\" [html]=\"html\" [ts]=\"ts\" [doc]=\"doc\">\n      <timer-demo></timer-demo>\n    </demo-section>"
        }), 
        __metadata('design:paramtypes', [])
    ], TimerSectionComponent);
    return TimerSectionComponent;
}());
exports.TimerSectionComponent = TimerSectionComponent;
//# sourceMappingURL=timer-section.component.js.map