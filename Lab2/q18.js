function iterArray(arr) {
    let i = arr.length;
    return {
        next() {
            return {
                value  :arr[--i],
                done : i<0
            }
        }
    }
}

const arr = [1,2,3]
const iter = new iterArray(arr);
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())

