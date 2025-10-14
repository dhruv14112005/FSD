var a = 20;
let b="abc";
const c=45;
console.log("Before redeclaration:",a);
console.log("Before redeclaration:",b);
console.log("Before redeclaration:",c);
var a = 30;
console.log("After redeclaration:",a);
// let b="xyz"; // Error
// c=50; // Error
console.log("After redeclaration:",b);
console.log("After redeclaration:",c);
