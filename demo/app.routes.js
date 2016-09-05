"use strict";
var getting_started_component_1 = require('./components/getting-started/getting-started.component');
var clock_section_component_1 = require('./components/clock-section.component');
var timer_section_component_1 = require('./components/timer-section.component');
var router_1 = require('@angular/router');
exports.routes = [
    {
        path: '',
        data: ['Getting started'],
        component: getting_started_component_1.GettingStartedSectionComponent
    }, {
        path: 'clock',
        data: ['Clock'],
        component: clock_section_component_1.ClockSectionComponent
    }, {
        path: 'timer',
        data: ['Timer'],
        component: timer_section_component_1.TimerSectionComponent
    }, {
        path: '**',
        redirectTo: '/'
    }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes, { useHash: true });
//# sourceMappingURL=app.routes.js.map