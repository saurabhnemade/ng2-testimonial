"use strict";
var getting_started_1 = require('./components/getting-started/getting-started');
var clock_section_1 = require('./components/clock-section');
var router_1 = require('@angular/router');
exports.routes = [
    {
        path: '',
        data: ['Getting started'],
        component: getting_started_1.GettingStartedSectionComponent
    }, {
        path: 'clock',
        data: ['Clock'],
        component: clock_section_1.ClockSectionComponent
    }, {
        path: '**',
        redirectTo: '/'
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=config.js.map