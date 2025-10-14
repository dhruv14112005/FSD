{
    var a = 20;
    let b="abc";
    const c=45;
    console.log("Inside function scope a:",a);
    console.log("Inside function scope b:",b);
    console.log("Inside function scope c:",c);
}

console.log("Outside function scope a:",a); // only it can be used outside the block
console.log("Outside function scope b:",b);
console.log("Outside function scope c:",c);