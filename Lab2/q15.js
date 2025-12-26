function createProfile(obj) {
    let {name , age , interest : [primaryInterest , secondaryInterset]} = obj;
    return {name , age , primaryInterest , secondaryInterset}
}

console.log(createProfile({name  :'a' , age : 'b' , interest : ['a' , 'b' , 'c']}))