import { Person as Person } from "./Person";
import { People } from "./People";
let p1 = new Person('bruno')
let p2 = new Person('pedro')
let people = new People([p1,p2]);
console.log(p1.greet());
people.greetings()