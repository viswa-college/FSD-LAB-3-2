function mergeObj(...obj) {
    let newObj = {}
    for(let x of obj) {
        newObj = {...newObj , ...x}
    }
    return newObj;
}

const userDetails = {name: 'CVR', age: 25} 
const userAddress = {address: 'Mangalpally', city: 'Hyderabad'} 
const userPreferences = {theme: 'Engineering Edu', language: 'EN'}

console.log(mergeObj(userAddress , userDetails , userPreferences))