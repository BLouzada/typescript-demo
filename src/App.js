"use strict";
exports.__esModule = true;
var Person_1 = require("./Person");
var People_1 = require("./People");
var p1 = new Person_1.Person('bruno');
var p2 = new Person_1.Person('pedro');
var people = new People_1.People([p1, p2]);
console.log(p1.greet());
console.log(people.greetings());
