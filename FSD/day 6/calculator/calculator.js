
function add(){
    console.log("add");
    const a=document.getElementById("num1").value;
    const b=document.getElementById("num2").value;
    if(a=="" || b==""){
        alert("Please enter both numbers");
        return;
    }
    document.getElementById("result").value=parseInt(a)+parseInt(b);
}

function sub(){
    console.log("sub");
    const a=document.getElementById("num1").value;
    const b=document.getElementById("num2").value;
    if(a=="" || b==""){
        alert("Please enter both numbers");
        return;
    }
    document.getElementById("result").value=parseInt(a)-parseInt(b);
}

function mul(){
    console.log("mul");
    const a=document.getElementById("num1").value;
    const b=document.getElementById("num2").value;
    if(a=="" || b==""){
        alert("Please enter both numbers");
        return;
    }
    document.getElementById("result").value=parseInt(a)*parseInt(b);
}

function div(){
    console.log("div");
    const a=document.getElementById("num1").value;
    const b=document.getElementById("num2").value;
    if(a=="" || b==""){
        alert("Please enter both numbers");
        return;
    }
    document.getElementById("result").value=parseInt(a)/parseInt(b);
}
