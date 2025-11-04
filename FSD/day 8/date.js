const currentDate = new Date();
console.log("Current Date and Time:", currentDate.toString());
console.log(currentDate.getDate());
console.log(currentDate.getMonth()+1); // Months are zero-based
console.log(currentDate.getFullYear());

const userDate= new Date("11-14-2005");
console.log("User Date and Time:", userDate);
console.log(userDate.getDate());
console.log(userDate.getMonth()+1); // Months are zero-based
console.log(userDate.getFullYear());