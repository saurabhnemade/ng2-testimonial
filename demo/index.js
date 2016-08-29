"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
//import {MainMenuComponent} from './components/main-menu/main-menu.component';
//import {TopMenuComponent} from './components/top-menu/top-menu.component';
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var common_1 = require('@angular/common');
var config_1 = require('./config');
var router_1 = require('@angular/router');
// todo: enable prod mod only for prod build
if (ENV) {
    core_1.enableProdMode();
}
var template = require('./demo.template.html');
var DemoComponent = (function () {
    function DemoComponent(viewContainerRef, router) {
        this.router = router;
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;
    }
    DemoComponent.prototype.ngAfterContentInit = function () {
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                if (typeof PR !== 'undefined') {
                    // google code-prettify
                    setTimeout(PR.prettyPrint, 50);
                }
            }
        });
    };
    DemoComponent = __decorate([
        core_1.Component({
            selector: 'demo',
            template: template,
            directives: [router_1.ROUTER_DIRECTIVES /*, TopMenuComponent, MainMenuComponent*/]
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, router_1.Router])
    ], DemoComponent);
    return DemoComponent;
}());
exports.DemoComponent = DemoComponent;
platform_browser_dynamic_1.bootstrap(DemoComponent, [
    config_1.APP_ROUTER_PROVIDERS,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
]);
//# sourceMappingURL=index.js.map