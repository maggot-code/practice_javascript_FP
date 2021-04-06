"use strict";
function sayHi(person) {
    var name = person.name, age = person.age;
    return "Hi," + name + ",age ? " + age;
}
var hihi = sayHi({ name: 'aaa', age: 143 });
console.log(hihi);
