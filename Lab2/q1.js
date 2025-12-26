function merge(...args) {
    let res = []
    for(let x in args) {
        res = [...res , ...args[x]]
    }
    return res;
}

console.log(merge([1,2] , [3,4] , [5,6]))
