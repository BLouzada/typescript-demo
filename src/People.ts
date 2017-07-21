import { Person as Person } from "./Person";

export class People {
    people: Person[];
    constructor(people: Person[]) {
        this.people = people;
    }
    greetings() {
        [].map.call(this.people, function (obj) {
            console.log(obj)
            console.log(obj.greet());
        });
    }
}