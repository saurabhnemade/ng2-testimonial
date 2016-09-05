"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var app_routes_1 = require('./../../app.routes');
var search_filter_pipe_1 = require('./search-filter.pipe');
// webpack html imports
var template = require('./main-menu.component.html');
var MainMenuComponent = (function () {
    function MainMenuComponent(router) {
        var _this = this;
        this.router = router;
        this.routes = app_routes_1.routes;
        this.search = {};
        this.hash = '';
        this.routes = this.routes.filter(function (v) { return v.path !== '**'; });
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                _this.hash = event.url;
            }
        });
    }
    MainMenuComponent = __decorate([
        core_1.Component({
            selector: 'main-menu',
            template: template,
            pipes: [search_filter_pipe_1.SearchFilterPipe]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], MainMenuComponent);
    return MainMenuComponent;
}());
exports.MainMenuComponent = MainMenuComponent;
//# sourceMappingURL=main-menu.component.js.map