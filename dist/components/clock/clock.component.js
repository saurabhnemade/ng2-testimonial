"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
var ClockComponent = (function () {
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
exports.ClockComponent = ClockComponent;
