var a = 20;
let b="abc";
const c=45;
console.log("IN global scope a:",a);
console.log("IN global scope b:",b);
console.log("IN global scope c:",c);

function f(){
    console.log("Value of global scope inside function scope a:",a);
    console.log("Value of global scope inside function scope b:",b);
    console.log("Value of global scope inside function scope c:",c);
}
f();