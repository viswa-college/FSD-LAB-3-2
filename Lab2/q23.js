function *sum(arr) {
    let s = 0;
    for(let x of arr) {
        s += x
        yield s
    }
    return s;
}

const genSum = sum([1,2,3,4,5])
console.log(genSum.next());
console.log(genSum.next());
