"use strict";
// 1. Union Types
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = exports.UserCard = void 0;
const zod_1 = require("zod");
let userId;
userId = 101;
userId = "USR101";
let currentStatus;
// 2. Type Narrowing
let value = 21;
function printValue(value) {
    if (typeof value == "string") {
        console.log(value.length);
    }
    if (typeof value == "number") {
        console.log(value);
    }
}
printValue("Soham Das");
printValue(value);
const user = {
    id: 123,
    name: 'Soham',
    email: 'abc',
    isAdmin: true
};
console.log(user);
const product1 = {
    id: 123,
    name: 'raj',
    price: 150,
    category: 'XL',
    discount: 20
};
const product2 = {
    id: 125,
    name: 'rahul',
    price: 100,
    category: 'L',
};
console.log(product1);
console.log(product2);
// 4. Function Typing
function multiply(x, y) {
    return x * y;
}
console.log(multiply(2, 5));
const userFinal = {
    id: 101,
    name: "Soham",
    email: "soham@gmail.com"
};
console.log(userFinal);
const data = [
    {
        "id": 1,
        "name": "Soham",
        "email": "soham@gmail.com"
    },
    {
        "id": 2,
        "name": "Rahul",
        "email": "rahul@gmail.com"
    }
];
console.log(data);
// 7. React Props
name;
"Soham";
age = { 21:  };
email = "soham@gmail.com"
    /  >
    type;
UserCardType = {
    name: string,
    age: number,
    email: string,
};
const UserCard = ({ name, age, email }) => {
    return ({ name } < /h1>
        < h1 > { age } < /h1>
        < h1 > { email } < /h1>
        < /div>);
};
exports.UserCard = UserCard;
text;
"Login";
disabled = { false:  }
    /  >
    type;
ButtonType = {
    text: string,
    disable: zod_1.boolean,
};
const Button = ({ text, disable }) => {
    ({ text } < /h1>
        < h1 > { disable } < /h1>
        < /div>);
};
exports.Button = Button;
//usestate is little hard i'll do later : usestate and generic
//# sourceMappingURL=importantTopics.js.map