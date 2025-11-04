const obj = {
    rollNo:1,
    name:"abc",
    branch:"elce",
    section:"A",
    email:{
        email1: "abs@gmail.com",
        email2: "abc246@gmail.com"
    }
} 
const obj2 = {
    rollNo:2,
    name:"xyz",
    branch:"elce",
    section:"A",
    email:{
        email1: "xyz@gmail.com",
        email2: "xyz246@gmail.com"
    }
} 

console.log(obj.email.email1);
console.log(obj["email"]["email1"]);
console.log(obj.email["email1"]);
console.log(obj["email"].email1);
console.log(obj);
console.log(obj.branch);
console.log(obj["name"]);