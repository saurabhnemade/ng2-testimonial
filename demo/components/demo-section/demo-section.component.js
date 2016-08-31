"use strict";
var core_1 = require('@angular/core');
//import {TAB_DIRECTIVES} from '../../ng2-bootstrap';
var template = require('./demo-section.component.html');
var DemoSectionComponent = (function () {
    function DemoSectionComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DemoSectionComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DemoSectionComponent.prototype, "titleDoc", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DemoSectionComponent.prototype, "src", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DemoSectionComponent.prototype, "html", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DemoSectionComponent.prototype, "ts", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DemoSectionComponent.prototype, "doc", void 0);
    DemoSectionComponent = __decorate([
        core_1.Component({
            selector: 'demo-section',
            directives: [],
            template: template
        }), 
        __metadata('design:paramtypes', [])
    ], DemoSectionComponent);
    return DemoSectionComponent;
}());
exports.DemoSectionComponent = DemoSectionComponent;
//# sourceMappingURL=demo-section.component.js.map