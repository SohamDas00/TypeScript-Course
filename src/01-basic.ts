const name:string ="Hello world"
console.log(name);

const age: number=12
const isTrue:boolean=false

const arr:number[]=[1,2,3,3]
const arr2:string[]=['ram','soham']

let randomword:any='soham';
randomword=123;
randomword=false;

//dont let any use unknown

let unknownnumber:unknown=123;
unknownnumber='soham'

const sum=(a:number,b:number):number=>{
    return a+b;
}
console.log(sum(1,2));