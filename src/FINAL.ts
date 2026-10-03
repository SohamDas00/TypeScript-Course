// Q1 — Union + Narrowing

let input: string | number;

function processInput(input: string | number) {
    if (typeof input === 'string') console.log(input.toUpperCase());
    else console.log(input * 2);
}

processInput("soham");
processInput(10);

// Q2 — Union of specific values

type OrderStatus = "pending" | "confirmed" | "shipped" | "delivered" | "cancelled" | "processing"

let orderStatus: OrderStatus = 'pending';
orderStatus = 'processing'

// Type '"processing"' is not assignable to type 'OrderStatus'.  and if orderStatus is const we can't change it. will get error.

// Q3 — Interface + Optional Property

type Employee = {
    id: number,
    name: string,
    email: string,
    salary: number,
    department: string,
    phone?: number,
}

const employee1: Employee = {
    id: 123,
    name: 'Soham Das',
    email: 'abc@gmail.com',
    salary: 1234,
    department: 'Engineering',
    phone: 123456
}
const employee2: Employee = {
    id: 122,
    name: 'Raj Dey',
    email: 'vvc@gmail.com',
    salary: 123,
    department: 'Marketing'
}


console.log(employee1);
console.log(employee2);

// Q4 — Array of Objects

const data:Employee[] = [
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
]

console.log(data.map((value)=>{
    return{
        name:value.name,
        department:value.department
    }
}))


// Q5 — Function Typing

function calculateSalary(salary:number,bonus:number):number{
    return salary+bonus;
}

console.log(calculateSalary(500,50));

// Q7 — API Response Type
interface Data{
    id:number,
    name:string,
    email:string,
    isVerified:boolean
}

const data1:Data={
  "id": 101,
  "name": "Soham",
  "email": "soham@gmail.com",
  "isVerified": true
}
console.log(data1);


// Q8 — Nested API Response

type typeData2={
    id:number,
    name:string,
    email:string,
}

type typeData={
    success:boolean,
    user:typeData2
}

const data2:typeData={
  "success": true,
  "user": {
    "id": 101,
    "name": "Soham",
    "email": "soham@gmail.com"
  }
}
console.log(data2);

// Q9 — API Array Response

type typeData3M={
    id:number,
    name:string,
}

type typeData3={
    success:boolean,
    users:typeData3M[]
}
const data3:typeData3={
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
}


console.log(data3.users.map((value)=>{
    return{
        id:value.id,
        name:value.name
    }
}));

// Q10 — Component Props

<ProductCard
    id={1}
    name="Laptop"
    price={55000}
    category="Electronics"
/>

type typeProduct={
    id:number,
    name:string,
    price:number,
    category:string
}

export const ProductCard=({id,name,price,category}:typeProduct)=>{
    return(
        ...
    )
}

// Q11 — Optional React Props

type typeProfileCard={
    name:string,
    age:number,
    email:string,
    image?:string
}

<ProfileCard
    name="Soham"
    age={21}
    email="soham@gmail.com"
/>
<ProfileCard
    name="Soham"
    age={21}
    email="soham@gmail.com"
    image="/profile.png"
/>

export const ProfileCard=({name,age,email,image}:typeProfileCard)=>{
    return(
        ...
    )
}

// Q13 — User Role + Function

type Role = "user" | "admin" | "moderator";
type User = {
    id: number;
    name: string;
    role: Role;
};

function checkPermission(user:User){
    if(user.role === 'user'){
        console.log("Limited access");
    }
    else if(user.role === 'admin'){
        console.log("Full access");
    }
    else console.log("Moderate access");
}

const user1:User={
    id:123,
    name:"Soham",
    role:"admin"
}
checkPermission(user1)