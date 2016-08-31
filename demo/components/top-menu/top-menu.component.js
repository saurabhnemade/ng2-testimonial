"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var platform_browser_1 = require('@angular/platform-browser');
// webpack html imports
var template = require('./top-menu.component.html');
var TopMenuComponent = (function () {
    function TopMenuComponent(renderer, document, router) {
        this.router = router;
        this.isShown = false;
        this.renderer = renderer;
        this.document = document;
    }
    TopMenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                _this.toggle(false);
            }
        });
    };
    TopMenuComponent.prototype.toggle = function (isShown) {
        this.isShown = typeof isShown === 'undefined' ? !this.isShown : isShown;
        if (this.document && this.document.body) {
            this.renderer.setElementClass(this.document.body, 'isOpenMenu', this.isShown);
            if (this.isShown === false) {
                this.renderer.setElementProperty(this.document.body, 'scrollTop', 0);
            }
        }
    };
    TopMenuComponent = __decorate([
        core_1.Component({
            selector: 'top-menu',
            template: template
        }),
        __param(1, core_1.Inject(platform_browser_1.DOCUMENT)), 
        __metadata('design:paramtypes', [core_1.Renderer, Object, router_1.Router])
    ], TopMenuComponent);
    return TopMenuComponent;
}());
exports.TopMenuComponent = TopMenuComponent;
//# sourceMappingURL=top-menu.component.js.map