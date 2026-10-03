"use strict";
// Q1 — Union + Narrowing
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCard = exports.ProductCard = void 0;
let input;
function processInput(input) {
    if (typeof input === 'string')
        console.log(input.toUpperCase());
    else
        console.log(input * 2);
}
processInput("soham");
processInput(10);
let orderStatus = 'pending';
orderStatus = 'processing';
const employee1 = {
    id: 123,
    name: 'Soham Das',
    email: 'abc@gmail.com',
    salary: 1234,
    department: 'Engineering',
    phone: 123456
};
const employee2 = {
    id: 122,
    name: 'Raj Dey',
    email: 'vvc@gmail.com',
    salary: 123,
    department: 'Marketing'
};
console.log(employee1);
console.log(employee2);
// Q4 — Array of Objects
const data = [
    {
        id: 123,
        name: 'Soham Das',
        email: 'abc@gmail.com',
        salary: 1234,
        department: 'Engineering',
        phone: 123456
    },
    {
        id: 122,
        name: 'Raj Dey',
        email: 'vvc@gmail.com',
        salary: 123,
        department: 'Marketing'
    },
    {
        id: 125,
        name: 'Rahul Sarkar',
        email: 'yc@gmail.com',
        salary: 12,
        department: 'HR'
    }
];
console.log(data.map((value) => {
    return {
        name: value.name,
        department: value.department
    };
}));
// Q5 — Function Typing
function calculateSalary(salary, bonus) {
    return salary + bonus;
}
console.log(calculateSalary(500, 50));
const data1 = {
    "id": 101,
    "name": "Soham",
    "email": "soham@gmail.com",
    "isVerified": true
};
console.log(data1);
const data2 = {
    "success": true,
    "user": {
        "id": 101,
        "name": "Soham",
        "email": "soham@gmail.com"
    }
};
console.log(data2);
const data3 = {
    "success": true,
    "users": [
        {
            "id": 1,
            "name": "Soham"
        },
        {
            "id": 2,
            "name": "Rahul"
        }
    ]
};
console.log(data3.users.map((value) => {
    return {
        id: value.id,
        name: value.name
    };
}));
// Q10 — Component Props
id;
{
    1;
}
name = "Laptop";
price = { 55000:  };
category = "Electronics"
    /  >
    type;
typeProduct = {
    id: number,
    name: string,
    price: number,
    category: string
};
const ProductCard = ({ id, name, price, category }) => {
    return (...) => ;
};
exports.ProductCard = ProductCard;
name;
"Soham";
age = { 21:  };
email = "soham@gmail.com"
    /  >
    name;
"Soham";
age = { 21:  };
email = "soham@gmail.com";
image = "/profile.png"
    /  >
;
const ProfileCard = ({ name, age, email, image }) => {
    return (...) => ;
};
exports.ProfileCard = ProfileCard;
function checkPermission(user) {
    if (user.role === 'user') {
        console.log("Limited access");
    }
    else if (user.role === 'admin') {
        console.log("Full access");
    }
    else
        console.log("Moderate access");
}
const user1 = {
    id: 123,
    name: "Soham",
    role: "admin"
};
checkPermission(user1);
//# sourceMappingURL=FINAL.js.map