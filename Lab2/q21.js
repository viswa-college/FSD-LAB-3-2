function *fibu() {
    console.log("Fibonacci at 1 :" + 1);
    yield
    console.log("Fibonacci at 2 :" + 1);
    yield
    let a = 1 , b = 1;
    let i = 3;
    while(true) {
        console.log("Fibonacci at "+i+" :" +(a+b));
        let cur = a+b;
        a = b;
        b = cur;
        i++;
        yield;
    }
}

const genFibu = fibu();
genFibu.next();
genFibu.next();
genFibu.next();
genFibu.next();
genFibu.next();
genFibu.next();
genFibu.next();