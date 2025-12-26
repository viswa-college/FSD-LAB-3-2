function updateEmployeeDetails(obj , role) {
    let newObj = {...obj , role}
    return newObj;
}

console.log(updateEmployeeDetails({name: 'viswa', role: 'Developer', age: 28, location: 'IN'} , 'Senior Developer'))