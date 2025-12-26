function iterArray(arr) {
    let i = 0;
    return {
        next() {
            if(i == arr.length) i = 0;
            return {
                value: arr[i++]
            }
        }
    }
}

const arr = [1,2,3];
const iter = new iterArray(arr)
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())