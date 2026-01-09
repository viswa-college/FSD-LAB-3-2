function getData(time) {
    const pr = new Promise((resolve,  reject)=> {
        setTimeout(()=>{
            console.log("The Data");
            if(time > 2000) {
            reject({
                message: "Taking Long time..."
            });
        }else {
            resolve({
                message: "Done Executing",
                data: {
                    name : "viswa",
                    age : 20,
                    college: "cvr"
                }
            });
        }
        },Math.min(time , 2000));
        
    });
    return pr;
}

const getUserInfo = getData(2000);
getUserInfo.then((data)=> {
    console.log("User Details: ");
    // console.log(data)
    for(let key in data.data) {
        console.log(key + " : " + data.data[key]);
    }
}).catch((data)=> {
    console.log(data.message);
});