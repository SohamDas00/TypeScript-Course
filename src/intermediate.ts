import { number, string } from "zod"

type Users={
    name:string,
    age:number,
    gender:string
}

const user:Users={
    name:"Soham Das",
    age:21,
    gender:'M'
}

let id:string | number;
id=123;
id="RRR"


type names={
    name:string,
    age:number,
    email?:string
}

const name1:names={
    name:"Soham Das",
    age:21,
    email:'abc'
}
const name2:names={
    name:"Raj Dey",
    age:23
}