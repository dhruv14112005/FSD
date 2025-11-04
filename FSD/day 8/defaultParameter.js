const add = (a,b,c=0)=>{
    console.log(a+b+c);
}
add(2,3); 
add(2,3,4); 

const name=(f,l,m="")=>{
    console.log(f+" "+m+" "+l);
}
name("John","Doe");
name("John","Doe","M.");