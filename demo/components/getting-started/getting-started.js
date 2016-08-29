"use strict";
var core_1 = require('@angular/core');
var name = "Native Angular 2 directives for bootstrap";
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
        this.dependencies = 'N/A'; //dependencies;
        this.installation = 'N/A'; //installation;
        this.readingDocumentation = 'N/A'; //readingDocumentation;
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