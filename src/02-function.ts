const greet=(name:string,greet?:string)=>{
    if(greet) console.log(`${greet} ${name}`);
    else console.log(`hello ${name}`);
}

greet("soham",'Good morning');
greet("rahul");


type intro={
    name:string,
    age:number,
    email:string
}

const obj:intro={
    name:"Soham Das",
    age:21,
    email:"abc"
}
console.log(obj);