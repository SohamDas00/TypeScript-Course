// 1. Union Types

import { boolean } from "zod";

let userId: string | number;
userId = 101;
userId = "USR101";

// userId = true; it will give error as i did't mentoin when decleraton the type boolean

type status = "loading" | "success" | "error";
let currentStatus: status;

// 2. Type Narrowing

let value: string | number = 21;

function printValue(value: string | number) {
    if (typeof value == "string") {
        console.log(value.length);
    }
    if (typeof value == "number") {
        console.log(value);
    }
}

printValue("Soham Das");
printValue(value);


// 3. Interface / Type

type User = {
    id: number,
    name: string,
    email: string,
    isAdmin: boolean
}

const user: User = {
    id: 123,
    name: 'Soham',
    email: 'abc',
    isAdmin: true
}

console.log(user);


type product = {
    id: number,
    name: string,
    price: number,
    category: string,
    discount?: number
}

const product1: product = {
    id: 123,
    name: 'raj',
    price: 150,
    category: 'XL',
    discount: 20
}
const product2: product = {
    id: 125,
    name: 'rahul',
    price: 100,
    category: 'L',
}

console.log(product1);
console.log(product2);


// 4. Function Typing

function multiply(x: number, y: number): number {
    return x * y;
}
console.log(multiply(2, 5));

//can't do the calculator 

//5. generic i will do it later its little tough  **

// 6. API Response Types

interface UserResponse {
    id: number,
    name: string,
    email: string
}

const userFinal: UserResponse = {
    id: 101,
    name: "Soham",
    email: "soham@gmail.com"
};

console.log(userFinal);


interface obj {
    id: number,
    name: string,
    email: string
}
const data: obj[] = [
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
]
console.log(data);


// 7. React Props
<UserCard
    name="Soham"
    age={21}
    email="soham@gmail.com"
/>


type UserCardType={
    name:string,
    age:number,
    email:string,
}
export const UserCard=({name,age,email}:UserCardType)=>{
    return(
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{email}</h1>
        </div>

    )
}


<Button
    text="Login"
    disabled={false}
/>


type ButtonType={
    text:string,
    disable:boolean,
}

export const Button=({text,disable}:ButtonType)=>{
    <div>
        <h1>{text}</h1>
        <h1>{disable}</h1>
    </div>
}

//usestate is little hard i'll do later : usestate and generic