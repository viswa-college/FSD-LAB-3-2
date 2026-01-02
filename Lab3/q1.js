function greet(name , fun) {
    console.log("Calling call back...");
    console.log(fun(name , "hello"));
    console.log("end..");
}


greet("viswa" , (name , msg)=> {
    return msg + " " + name;
});