const user = {
    name : "viswa",
    age : 20,
    college : "cvr college",
    rollno : "5r3"
}

function fetchDataWithCallback(endpoint) {
    console.log("Fetching user details....");
    setTimeout(()=> {
        try {
            console.log("printing user name " + endpoint.name);
        }catch(e) {
            console.log("Error in Fetching Details " + e);
        }finally {
            console.log("Fetching Done with Error/Success");
        }
    },3000);
}

console.log("With out Error");
fetchDataWithCallback(user);
console.log("\n\nWith Error");
fetchDataWithCallback(undefined);