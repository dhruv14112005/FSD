const add=(...args)=>{
    console.log(args);
    let sum=0;
    for(let i of args){
        sum+=i;
    }
    console.log("Sum is:",sum);
}
add(1,2,3,4,5);