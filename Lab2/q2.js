function sum(...args) {
    let sum = 0;
    for(let x in args) {
        sum += args[x];
    }
    return sum;
}

console.log(sum(1,2,3,4,5,6,7));