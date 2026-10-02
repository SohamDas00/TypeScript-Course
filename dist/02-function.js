"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greet = (name, greet) => {
    if (greet)
        console.log(`${greet} ${name}`);
    else
        console.log(`hello ${name}`);
};
greet("soham", 'Good morning');
greet("rahul");
const obj = {
    name: "Soham Das",
    age: 21,
    email: "abc"
};
console.log(obj);
//# sourceMappingURL=02-function.js.map