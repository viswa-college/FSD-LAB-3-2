const obj = {
    id1 : Symbol("id"),
    id2 : Symbol("id")
}

console.log(obj);
console.log("Is Both are Equall : " + (obj.id1 === obj.id2))