var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("components/clock/clock.component", ['@angular/core', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, Rx_1;
    var ClockComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            ClockComponent = (function () {
                function ClockComponent() {
                    var _this = this;
                    this.dateFormat = 'hh:mm:ss';
                    this.midnight = new core_1.EventEmitter(false);
                    this.clock = Rx_1.Observable
                        .interval(1000)
                        .map(function () {
                        var date = new Date();
                        if (date.getHours() === 9 && date.getMinutes() === 12 && date.getSeconds() === 15) {
                            _this.onMidnight();
                        }
                        return date;
                    });
                }
                ClockComponent.prototype.onMidnight = function () {
                    this.midnight.emit(this);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ClockComponent.prototype, "dateFormat", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], ClockComponent.prototype, "midnight", void 0);
                ClockComponent = __decorate([
                    core_1.Component({
                        selector: 'axa-clock',
                        template: "<div class=\"clock\"><h3 class=\"title\">Current time is</h3>{{ clock | async | date:dateFormat }}<div>",
                        styles: ["\n        .title { margin: 0; }\n        .clock { background: #103184; color: #cccccc; padding: 10px; }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ClockComponent);
                return ClockComponent;
            }());
            exports_1("ClockComponent", ClockComponent);
        }
    }
});
System.register("components/clock", ["components/clock/clock.component"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var clock_component_1;
    var CLOCK_DIRECTIVES;
    return {
        setters:[
            function (clock_component_1_1) {
                clock_component_1 = clock_component_1_1;
                exports_2({
                    "ClockComponent": clock_component_1_1["ClockComponent"]
                });
            }],
        execute: function() {
            exports_2("CLOCK_DIRECTIVES", CLOCK_DIRECTIVES = [clock_component_1.ClockComponent]);
        }
    }
});
System.register("components/timer/timer.service", ['@angular/core', 'rxjs/Rx'], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_2, Rx_2;
    var TimerService;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (Rx_2_1) {
                Rx_2 = Rx_2_1;
            }],
        execute: function() {
            TimerService = (function () {
                function TimerService() {
                }
                TimerService.prototype.start = function (totalNumberOfSeconds, callback) {
                    var _this = this;
                    // Falls Anzahl Sekunden kleiner oder gleich 0 ist, macht der Countdown
                    // kein Sinn.
                    if (totalNumberOfSeconds <= 0) {
                        return;
                    }
                    this.totalNumberOfSeconds = totalNumberOfSeconds;
                    this.secondsLeft = this.totalNumberOfSeconds;
                    // Timer wird hier runtergezählt.
                    // timerCycle wird alle 100ms ausgeführt.
                    this.theTimer = Rx_2.Observable
                        .timer(0, 100)
                        .subscribe(function (t) { return _this.timerCycle(callback); });
                };
                TimerService.prototype.timerCycle = function (callback) {
                    this.secondsLeft = Math.round((this.secondsLeft -= 0.1) * 10) / 10;
                    if (this.secondsLeft <= 0.0) {
                        this.theTimer.unsubscribe();
                        this.theTimer = undefined;
                        if (callback)
                            callback();
                    }
                };
                TimerService = __decorate([
                    core_2.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], TimerService);
                return TimerService;
            }());
            exports_3("TimerService", TimerService);
        }
    }
});
System.register("components/timer", ["components/timer/timer.service"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var timer_service_1;
    var TIMER_DIRECTIVES;
    return {
        setters:[
            function (timer_service_1_1) {
                timer_service_1 = timer_service_1_1;
                exports_4({
                    "TimerService": timer_service_1_1["TimerService"]
                });
            }],
        execute: function() {
            exports_4("TIMER_DIRECTIVES", TIMER_DIRECTIVES = [timer_service_1.TimerService]);
        }
    }
});
System.register("module", ['@angular/core', '@angular/common', "components/clock", "components/timer"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_3, common_1, clock_1, timer_1;
    var NG2_COMPONENT_STARTER_DIRECTIVES, ClockModule;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (clock_1_1) {
                clock_1 = clock_1_1;
            },
            function (timer_1_1) {
                timer_1 = timer_1_1;
            }],
        execute: function() {
            NG2_COMPONENT_STARTER_DIRECTIVES = [clock_1.CLOCK_DIRECTIVES /*, TIMER_DIRECTIVES */];
            ClockModule = (function () {
                function ClockModule() {
                }
                ClockModule = __decorate([
                    core_3.NgModule({
                        declarations: NG2_COMPONENT_STARTER_DIRECTIVES,
                        imports: [common_1.CommonModule],
                        exports: NG2_COMPONENT_STARTER_DIRECTIVES,
                        providers: [timer_1.TIMER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ClockModule);
                return ClockModule;
            }());
            exports_5("ClockModule", ClockModule);
        }
    }
});
System.register("index", ["components/clock", "components/timer", "module"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_6(exports);
    }
    return {
        setters:[
            function (clock_2_1) {
                exportStar_1(clock_2_1);
            },
            function (timer_2_1) {
                exportStar_1(timer_2_1);
            },
            function (module_1_1) {
                exportStar_1(module_1_1);
            }],
        execute: function() {
        }
    }
});
/*
export default {
    directives: [
        NG2_COMPONENT_STARTER_DIRECTIVES
    ]
}
*/ 
