"use strict";
var core_1 = require('@angular/core');
var name = "AXA Angular 2 Component Starter";
// webpack html imports
var template = require('./getting-started.template.html');
var desc = "\n";
//let dependencies = require('./dependencies.md');
//let installation = require('./installation.md');
//let readingDocumentation = require('./reading-documentation.md');
var GettingStartedSectionComponent = (function () {
    function GettingStartedSectionComponent() {
        this.name = name;
        this.desc = desc;
        this.dependencies = 'deps N/A'; //dependencies;
        this.installation = 'installation N/A'; //installation;
        this.readingDocumentation = 'reading N/A'; //readingDocumentation;
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
//# sourceMappingURL=getting-started.js.map