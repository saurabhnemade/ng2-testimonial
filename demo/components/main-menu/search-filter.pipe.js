"use strict";
var core_1 = require('@angular/core');
var SearchFilterPipe = (function () {
    function SearchFilterPipe() {
    }
    SearchFilterPipe.prototype.transform = function (value, text) {
        if (!text) {
            return value;
        }
        var items = value;
        var newItems = [];
        items.forEach(function (item) {
            if (item.data[0].toLowerCase().indexOf(text.toLowerCase()) !== -1) {
                newItems.push(item);
            }
        });
        return newItems;
    };
    SearchFilterPipe = __decorate([
        core_1.Pipe({ name: 'SearchFilter' }), 
        __metadata('design:paramtypes', [])
    ], SearchFilterPipe);
    return SearchFilterPipe;
}());
exports.SearchFilterPipe = SearchFilterPipe;
//# sourceMappingURL=search-filter.pipe.js.map