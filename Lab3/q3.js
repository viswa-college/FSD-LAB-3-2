function delayedMessage(msg , delay) {
    setTimeout(()=> {
        console.log("This message is printed after " + (delay/1000) + " seconds");
        console.log(msg);
    },delay);
}

delayedMessage("Hello World!" , 3000);

