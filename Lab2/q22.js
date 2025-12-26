function *generate(arr1 , arr2) {
    for(let i=0;i<arr1.length;i++) {
        console.log("Value1 : " + arr1[i] + " value2 : " + arr2[i]);
        yield
    }
}

const genComb = generate([1,2,3,4,5] , [1,1,2,3,5])
genComb.next()
genComb.next()