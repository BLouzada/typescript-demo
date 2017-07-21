"use strict";
exports.__esModule = true;
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        return "Hello, my name is" + this.name;
    };
    return Person;
}());
exports.Person = Person;
