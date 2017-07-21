"use strict";
exports.__esModule = true;
var People = (function () {
    function People(people) {
        this.people = people;
    }
    People.prototype.greetings = function () {
        return [].map.call(this.people, function (obj) {
            return obj.greet();
        });
    };
    return People;
}());
exports.People = People;
