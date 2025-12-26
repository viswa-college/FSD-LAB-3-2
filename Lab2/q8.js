const colors = ['red', 'green', 'blue', 'yellow']

const [first,second] = colors;
console.log("First : " + first , "Second : " + second);


const [,sec,,fourth] = colors;
console.log("Second : " + sec , "Fourth : " + fourth);