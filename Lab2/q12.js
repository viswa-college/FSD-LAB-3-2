function createProfile(obj) {
    const {name , email} = obj;
    return {name , email};
}

console.log(createProfile({name : 'a' , age : 121 , email : "ffdd"}));