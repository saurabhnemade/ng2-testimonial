"use strict";
var core_1 = require('@angular/core');
var name = "AXA Angular 2 Component Starter";
// webpack html imports
var template = require('./getting-started.component.html');
var desc = "\n";
var dependencies = require('./dependencies.md');
var installation = require('./installation.md');
var readingDocumentation = require('./reading-documentation.md');
var GettingStartedSectionComponent = (function () {
    function GettingStartedSectionComponent() {
        this.name = name;
        this.desc = desc;
        this.dependencies = dependencies;
        this.installation = installation;
        this.readingDocumentation = readingDocumentation;
    }
    GettingStartedSectionComponent = __decorate([
        core_1.Component({
            selector: 'clock-section',
            template: template
        }), 
        __metadata('design:paramtypes', [])
    ], GettingStartedSectionComponent);
    return GettingStartedSectionComponent;
}());
exports.GettingStartedSectionComponent = GettingStartedSectionComponent;
//# sourceMappingURL=getting-started.component.js.map