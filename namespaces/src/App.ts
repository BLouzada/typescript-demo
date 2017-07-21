/// <reference path="Greetings.ts" />
let greeting = new greetings.Greeting(1,"teste");
console.log(greeting)

/// <reference path="Items.ts" />
let i : items.IItem = {
    id: 10,
    title : "ABC"
}
items.print(i);
items.print({id: 1,title : "TESTE"});