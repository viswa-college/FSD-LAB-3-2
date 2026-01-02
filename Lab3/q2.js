function mul(num , fun) {
    console.log("Multiplying With 2...");
    return fun(num*2 , add);
}

function sub(num , fun) {
    console.log("Subtracting by 3...");
    return fun(num-3);
}

function add(num) {
    console.log("Adding 2...");
    return num+10;
}


console.log(mul(20 , sub))