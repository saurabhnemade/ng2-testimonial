"use strict";
var core_1 = require('@angular/core');
var main_menu_component_1 = require('./components/main-menu/main-menu.component');
var top_menu_component_1 = require('./components/top-menu/top-menu.component');
var router_1 = require('@angular/router');
var template = require('./app.component.html');
var AppComponent = (function () {
    function AppComponent(viewContainerRef, router) {
        this.router = router;
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;
    }
    AppComponent.prototype.ngAfterContentInit = function () {
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                if (typeof PR !== 'undefined') {
                    // google code-prettify
                    setTimeout(PR.prettyPrint, 50);
                }
            }
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'demo-app',
            template: template,
            directives: [main_menu_component_1.MainMenuComponent, top_menu_component_1.TopMenuComponent]
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map